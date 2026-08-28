import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

import type { Photo } from "@/types";
import { galleryOverrides } from "@/data/gallery-overrides";
import { featuredPhotos, photoOfTheWeek as curatedPhotoOfTheWeek } from "@/data/photos";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const GALLERY_DIR = path.join(PUBLIC_DIR, "gallery");
const POTW_DIR = path.join(PUBLIC_DIR, "home", "photo-of-the-week");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const CATEGORIES: Photo["category"][] = [
  "cityscapes",
  "street",
  "nature",
  "people",
  "portrait",
  "sports",
  "other",
];

type InternalPhoto = Photo & { _filename: string; _mtimeMs: number };

function titleFromFilename(filename: string) {
  const base = filename.replace(/\.[^.]+$/, "");
  return base
    .replace(/[-_]+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function isImageFile(filename: string) {
  return IMAGE_EXTENSIONS.has(path.extname(filename).toLowerCase());
}

/** Images directly in public/gallery/ default to "other"; images inside a category-named
 * subfolder (e.g. public/gallery/street/) take that category. Subfolders with no matching
 * category name are skipped — photos for other pages (home, events) live outside public/gallery/. */
function collectImageFiles(): { filePath: string; filename: string; folderCategory: Photo["category"] }[] {
  let rootEntries: fs.Dirent[];
  try {
    rootEntries = fs.readdirSync(GALLERY_DIR, { withFileTypes: true });
  } catch {
    return [];
  }

  const files: { filePath: string; filename: string; folderCategory: Photo["category"] }[] = [];

  for (const entry of rootEntries) {
    if (entry.isDirectory()) {
      if (!CATEGORIES.includes(entry.name as Photo["category"])) continue;
      const folderCategory = entry.name as Photo["category"];
      const dirPath = path.join(GALLERY_DIR, entry.name);
      for (const filename of fs.readdirSync(dirPath)) {
        if (isImageFile(filename)) {
          files.push({ filePath: path.join(dirPath, filename), filename, folderCategory });
        }
      }
    } else if (isImageFile(entry.name)) {
      files.push({ filePath: path.join(GALLERY_DIR, entry.name), filename: entry.name, folderCategory: "other" });
    }
  }

  return files;
}

function toInternalPhoto(filePath: string, filename: string, folderCategory: Photo["category"]): InternalPhoto {
  const { width, height } = imageSize(fs.readFileSync(filePath));
  const mtimeMs = fs.statSync(filePath).mtimeMs;
  const override = galleryOverrides[filename] ?? {};
  const title = override.title ?? titleFromFilename(filename);
  const src = `/${path.relative(PUBLIC_DIR, filePath).split(path.sep).join("/")}`;

  return {
    id: filename.replace(/\.[^.]+$/, ""),
    title,
    src,
    alt: override.alt ?? title,
    width: width ?? 1600,
    height: height ?? 1600,
    category: override.category ?? folderCategory,
    photographer: override.photographer ?? {
      id: "club-member",
      name: "Club Member",
    },
    description: override.description,
    camera: override.camera,
    lens: override.lens,
    settings: override.settings,
    featured: override.featured,
    _filename: filename,
    _mtimeMs: mtimeMs,
  };
}

function loadPhotos(): InternalPhoto[] {
  return collectImageFiles()
    .map(({ filePath, filename, folderCategory }) => toInternalPhoto(filePath, filename, folderCategory))
    .sort((a, b) => b._mtimeMs - a._mtimeMs);
}

function strip({ _filename, _mtimeMs, ...photo }: InternalPhoto): Photo {
  return photo;
}

/** All photos in public/gallery/, newest first. Falls back to the curated set if the folder is empty. */
export function getGalleryPhotos(): Photo[] {
  const photos = loadPhotos();
  return photos.length > 0 ? photos.map(strip) : featuredPhotos;
}

/** The first photo (folder order) from each of the first `limit` category folders, in gallery
 * directory order — used for the homepage featured grid. */
export function getFeaturedGalleryPhotos(limit = 5): Photo[] {
  let rootEntries: fs.Dirent[];
  try {
    rootEntries = fs.readdirSync(GALLERY_DIR, { withFileTypes: true });
  } catch {
    return featuredPhotos.slice(0, limit);
  }

  const categoryFolders = rootEntries
    .filter((entry) => entry.isDirectory() && CATEGORIES.includes(entry.name as Photo["category"]))
    .slice(0, limit);

  const photos: Photo[] = [];
  for (const folder of categoryFolders) {
    const dirPath = path.join(GALLERY_DIR, folder.name);
    const firstImage = fs.readdirSync(dirPath).find(isImageFile);
    if (!firstImage) continue;

    const folderCategory = folder.name as Photo["category"];
    photos.push(strip(toInternalPhoto(path.join(dirPath, firstImage), firstImage, folderCategory)));
  }

  return photos.length > 0 ? photos : featuredPhotos.slice(0, limit);
}

/** The first photo (folder order) in each category — used as the "Browse by category" card image. */
export function getCategoryCoverPhotos(): Partial<Record<Photo["category"], Photo>> {
  const covers: Partial<Record<Photo["category"], Photo>> = {};

  for (const { filePath, filename, folderCategory } of collectImageFiles()) {
    const category = galleryOverrides[filename]?.category ?? folderCategory;
    if (covers[category]) continue;
    covers[category] = strip(toInternalPhoto(filePath, filename, folderCategory));
  }

  return covers;
}

/** The homepage "Photo of the week": whichever image is newest in
 * public/home/photo-of-the-week/ — drop a new photo in there to update it, no
 * code changes needed. Falls back to the newest gallery photo, then the curated
 * default, if that folder is empty. */
export function getPhotoOfTheWeek(): Photo {
  let potwFiles: string[] = [];
  try {
    potwFiles = fs.readdirSync(POTW_DIR).filter(isImageFile);
  } catch {
    potwFiles = [];
  }

  if (potwFiles.length > 0) {
    const newest = potwFiles
      .map((filename) => ({ filename, mtimeMs: fs.statSync(path.join(POTW_DIR, filename)).mtimeMs }))
      .sort((a, b) => b.mtimeMs - a.mtimeMs)[0];

    return strip(toInternalPhoto(path.join(POTW_DIR, newest.filename), newest.filename, "other"));
  }

  const photos = loadPhotos();
  return photos.length > 0 ? strip(photos[0]) : curatedPhotoOfTheWeek;
}
