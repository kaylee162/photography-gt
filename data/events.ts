import type { ClubEvent } from "@/types";

export const upcomingEvents: ClubEvent[] = [
  {
    id: "fall-kickoff",
    title: "Fall Kickoff Meeting",
    slug: "fall-kickoff-meeting",
    description:
      "Meet the club, learn about upcoming events, and connect with photographers of every experience level.",
    startDate: "2026-08-27T18:30:00-04:00",
    location: "Georgia Tech Campus",
    image: "/images/events/fall-kickoff.jpg",
    imageAlt: "Students gathering at a Photography Club meeting",
    type: "social",
    featured: true,
  },
  {
    id: "midtown-photo-walk",
    title: "Midtown Photo Walk",
    slug: "midtown-photo-walk",
    description:
      "Explore Midtown Atlanta with other student photographers and practice street and architectural photography.",
    startDate: "2026-09-05T17:30:00-04:00",
    location: "Midtown Atlanta",
    image: "/images/events/midtown-photo-walk.jpg",
    imageAlt: "Atlanta buildings photographed during a city photo walk",
    type: "photo-walk",
  },
  {
    id: "portrait-lighting-workshop",
    title: "Portrait Lighting Workshop",
    slug: "portrait-lighting-workshop",
    description:
      "Learn practical lighting techniques for portraits using natural light and simple equipment.",
    startDate: "2026-09-10T18:30:00-04:00",
    location: "Georgia Tech Campus",
    image: "/images/events/portrait-lighting.jpg",
    imageAlt: "Portrait photography lighting setup",
    type: "workshop",
  },
];