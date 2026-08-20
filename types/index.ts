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
  /** True when no real photo exists yet — render a PlaceholderImage instead of `src`. */
  placeholder?: boolean;
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
  /** Skill level for workshops, e.g. "All levels", "Beginner friendly". */
  level?: string;
  registrationUrl?: string;
  featured?: boolean;
  /** True when no real photo exists yet — render a PlaceholderImage instead of `image`. */
  placeholder?: boolean;
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
  /** True when no real cover photo exists yet — render a PlaceholderImage instead of `coverImage`. */
  placeholder?: boolean;
};

export type TeamMember = {
  id: string;
  role: string;
  name?: string;
  bio?: string;
  photo?: string;
};

export type MerchItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  status: "coming-soon" | "available" | "sold-out";
  placeholder?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};