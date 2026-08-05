import type { Photo } from "@/types";

export const featuredPhotos: Photo[] = [
  {
    id: "tech-green-evening",
    title: "Evening on Tech Green",
    src: "/images/hero/tech-green-evening.jpg",
    alt: "Students crossing Tech Green in the evening light",
    width: 2400,
    height: 1600,
    category: "street",
    featured: true,
    photographer: {
      id: "photographer-one",
      name: "Student Photographer",
    },
  },
  {
    id: "atlanta-after-dark",
    title: "Atlanta After Dark",
    src: "/images/hero/atlanta-after-dark.jpg",
    alt: "Atlanta skyline photographed at night",
    width: 2400,
    height: 1600,
    category: "night",
    featured: true,
    photographer: {
      id: "photographer-two",
      name: "Student Photographer",
    },
  },
  {
    id: "campus-portrait",
    title: "Between Classes",
    src: "/images/photos/campus-portrait.jpg",
    alt: "Portrait of a Georgia Tech student on campus",
    width: 1600,
    height: 2000,
    category: "portrait",
    featured: true,
    photographer: {
      id: "photographer-three",
      name: "Student Photographer",
    },
  },
];

export const photoOfTheWeek = featuredPhotos[2];