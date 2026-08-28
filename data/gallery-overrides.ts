import type { Photo } from "@/types";

type GalleryOverride = Partial<
  Pick<
    Photo,
    | "title"
    | "alt"
    | "category"
    | "photographer"
    | "description"
    | "camera"
    | "lens"
    | "settings"
  >
> & {
  /** Show this photo in the homepage featured grid. */
  featured?: boolean;
};

/**
 * Optional metadata for images dropped into public/gallery/.
 * Key = exact filename, e.g. "beltline-candid.jpg". A photo with no entry
 * here still appears on the site with an auto-generated title and a
 * default category of "other" — add an entry only when you want to
 * override that.
 *
 * Example:
 * "beltline-candid.jpg": {
 *   title: "BeltLine Candid",
 *   category: "street",
 *   photographer: { id: "jane-doe", name: "Jane Doe" },
 *   featured: true,
 * },
 */
export const galleryOverrides: Record<string, GalleryOverride> = {
  "Ahmet Coksaygili - @coksaygilibaturay.jpg": {
    title: "Cat Portrait",
    photographer: {
      id: "ahmet-coksaygili",
      name: "Ahmet Coksaygili",
      instagram: "coksaygilibaturay",
    },
  },
  "Bingze Li - @zhoumu._.jpg": {
    title: "Seoul Skyline",
    photographer: {
      id: "bingze-li",
      name: "Bingze Li",
      instagram: "zhoumu._",
    },
  },
  "Caden Terrell - @ctwizzyfx.jpg": {
    title: "Airshow",
    photographer: {
      id: "caden-terrell",
      name: "Caden Terrell",
      instagram: "ctwizzyfx",
    },
  },
  "Dami Olayiwola - @_miles.o_.jpg": {
    title: "Lighthouse",
    photographer: {
      id: "dami-olayiwola",
      name: "Dami Olayiwola",
      instagram: "_miles.o_",
    },
  },
  "Ethan Leventhal.JPG": {
    title: "Urban Abstract",
    photographer: {
      id: "ethan-leventhal",
      name: "Ethan Leventhal",
    },
  },
  "Felipe Herrera - @felipe.fotos.jpeg": {
    title: "Street Candid",
    photographer: {
      id: "felipe-herrera",
      name: "Felipe Herrera",
      instagram: "felipe.fotos",
    },
  },
  "Jonathan Mandouma - @jmandouma_photos.jpg": {
    title: "Mountain Village",
    photographer: {
      id: "jonathan-mandouma",
      name: "Jonathan Mandouma",
      instagram: "jmandouma_photos",
    },
  },
  "Tushar Tyagi - @tushar.photog.jpg": {
    title: "Dunes",
    photographer: {
      id: "tushar-tyagi",
      name: "Tushar Tyagi",
      instagram: "tushar.photog",
    },
  },
};
