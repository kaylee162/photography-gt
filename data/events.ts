import type { ClubEvent } from "@/types";

/**
 * Sample Fall 2026 schedule. Photo walks run about twice a month, workshops
 * run monthly and rotate topics for all skill levels, and the exhibition
 * closes out the semester. Swap in confirmed dates/times/locations as they're
 * finalized — the Events page shows a banner noting this schedule is illustrative.
 */
export const upcomingEvents: ClubEvent[] = [
  {
    id: "fall-kickoff",
    title: "Fall Kickoff Meeting",
    slug: "fall-kickoff-meeting",
    description:
      "Meet the club, learn about upcoming photo walks, workshops, and the darkroom, and connect with photographers of every experience level.",
    startDate: "2026-08-27T18:30:00-04:00",
    location: "Georgia Tech Campus — room TBD",
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
    startDate: "2026-09-06T17:30:00-04:00",
    location: "Midtown Atlanta",
    image: "/images/events/midtown-photo-walk.jpg",
    imageAlt: "Atlanta buildings photographed during a city photo walk",
    type: "photo-walk",
  },
  {
    id: "beginner-basics-workshop",
    title: "Workshop: Beginner Photography Basics",
    slug: "beginner-photography-basics-workshop",
    description:
      "New to photography? Learn the fundamentals — exposure, composition, and how to get comfortable with your camera (phone cameras welcome).",
    startDate: "2026-09-13T18:30:00-04:00",
    location: "Georgia Tech Campus — room TBD",
    image: "",
    imageAlt: "Beginner photography workshop with cameras on a table",
    type: "workshop",
    level: "Beginner friendly",
    placeholder: true,
  },
  {
    id: "piedmont-park-photo-walk",
    title: "Piedmont Park Golden Hour Walk",
    slug: "piedmont-park-golden-hour-walk",
    description:
      "A relaxed golden-hour walk through Piedmont Park focused on light, landscape, and portrait practice.",
    startDate: "2026-09-20T17:30:00-04:00",
    location: "Piedmont Park, Atlanta",
    image: "",
    imageAlt: "Golden hour light in Piedmont Park",
    type: "photo-walk",
    placeholder: true,
  },
  {
    id: "film-101-workshop",
    title: "Workshop: Film Photography 101",
    slug: "film-photography-101-workshop",
    description:
      "An introduction to shooting on film — loading a camera, metering by eye, and what to expect once your roll heads to the darkroom.",
    startDate: "2026-10-04T18:30:00-04:00",
    location: "Georgia Tech Campus — room TBD",
    image: "",
    imageAlt: "Film camera and rolls of film on a table",
    type: "workshop",
    level: "All levels",
    placeholder: true,
  },
  {
    id: "beltline-photo-walk",
    title: "Atlanta BeltLine Photo Walk",
    slug: "atlanta-beltline-photo-walk",
    description:
      "Walk a stretch of the BeltLine and practice street photography, candid moments, and public art shots.",
    startDate: "2026-10-11T17:30:00-04:00",
    location: "Atlanta BeltLine — Eastside Trail",
    image: "",
    imageAlt: "The Atlanta BeltLine Eastside Trail",
    type: "photo-walk",
    placeholder: true,
  },
  {
    id: "bw-darkroom-workshop",
    title: "Workshop: Black & White Darkroom Printing",
    slug: "black-and-white-darkroom-printing-workshop",
    description:
      "Hands-on with our new darkroom — learn to develop and print black & white film from start to finish.",
    startDate: "2026-10-25T18:30:00-04:00",
    location: "Photography Club Darkroom",
    image: "",
    imageAlt: "Black and white prints hanging to dry in a darkroom",
    type: "workshop",
    level: "All levels",
    featured: true,
    placeholder: true,
  },
  {
    id: "night-photo-walk",
    title: "Campus After Dark: Night Photography Walk",
    slug: "campus-after-dark-night-photo-walk",
    description:
      "Long exposures, light trails, and low-light technique on a walk around campus after sunset.",
    startDate: "2026-11-01T19:00:00-04:00",
    location: "Georgia Tech Campus",
    image: "/images/hero/atlanta-after-dark.jpg",
    imageAlt: "Atlanta skyline photographed at night",
    type: "photo-walk",
  },
  {
    id: "composition-editing-workshop",
    title: "Workshop: Composition & Lightroom Editing",
    slug: "composition-and-lightroom-editing-workshop",
    description:
      "Strengthen your compositions in-camera, then learn an efficient editing workflow in Lightroom.",
    startDate: "2026-11-08T18:30:00-04:00",
    location: "Georgia Tech Campus — room TBD",
    image: "",
    imageAlt: "Photo editing on a laptop screen",
    type: "workshop",
    level: "All levels",
    placeholder: true,
  },
  {
    id: "fourth-ward-photo-walk",
    title: "Historic Fourth Ward Photo Walk",
    slug: "historic-fourth-ward-photo-walk",
    description:
      "Explore the Historic Fourth Ward Park and surrounding neighborhood for a mix of nature and urban shots.",
    startDate: "2026-11-15T17:00:00-05:00",
    location: "Historic Fourth Ward Park, Atlanta",
    image: "",
    imageAlt: "Historic Fourth Ward Park in Atlanta",
    type: "photo-walk",
    placeholder: true,
  },
  {
    id: "fall-exhibition",
    title: "Fall Exhibition: Perspectives",
    slug: "fall-exhibition-perspectives",
    description:
      "Our end-of-semester exhibition featuring printed work from club members across every category — portraits, street, film, and more. Open to the whole Georgia Tech community.",
    startDate: "2026-12-03T18:00:00-05:00",
    location: "Georgia Tech Campus — venue TBD",
    image: "",
    imageAlt: "Gallery wall of framed student photography prints",
    type: "exhibition",
    featured: true,
    placeholder: true,
  },
  {
    id: "end-of-semester-social",
    title: "End of Semester Print Social",
    slug: "end-of-semester-print-social",
    description:
      "Bring your favorite shots from the semester to share and print — a low-key wrap-up before finals.",
    startDate: "2026-12-06T18:00:00-05:00",
    location: "Georgia Tech Campus — room TBD",
    image: "",
    imageAlt: "Students reviewing printed photographs together",
    type: "print-social",
    placeholder: true,
  },
];

export const featuredEvents = upcomingEvents.filter((event) => event.featured);
