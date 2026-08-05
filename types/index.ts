export type NavigationItem = {
  label: string;
  href: string;
};

export type Photographer = {
  id: string;
  name: string;
  instagram?: string;
  portfolioUrl?: string;
  headshot?: string;
};

export type Photo = {
  id: string;
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  photographer: Photographer;
  category:
    | "portrait"
    | "street"
    | "architecture"
    | "nature"
    | "sports"
    | "film"
    | "night"
    | "event"
    | "other";
  description?: string;
  camera?: string;
  lens?: string;
  settings?: {
    aperture?: string;
    shutterSpeed?: string;
    iso?: string;
  };
  featured?: boolean;
};

export type ClubEvent = {
  id: string;
  title: string;
  slug: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  image: string;
  imageAlt: string;
  type:
    | "photo-walk"
    | "workshop"
    | "print-social"
    | "social"
    | "exhibition"
    | "trip";
  registrationUrl?: string;
  featured?: boolean;
};

export type Gallery = {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  coverImageAlt: string;
  photoCount: number;
  date: string;
  category?: string;
};