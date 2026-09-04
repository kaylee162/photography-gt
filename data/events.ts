import type { ClubEvent } from "@/types";

/**
 * Sample Fall 2026 schedule. Photo walks run about twice a month, workshops
 * run monthly and rotate topics for all skill levels, and the exhibition
 * closes out the semester. Swap in confirmed dates/times/locations as they're
 * finalized — the Events page shows a banner noting this schedule is illustrative.
 */
const allEvents: ClubEvent[] = [
  {
    id: "org fair tabling",
    title: "Org Fair Tabling",
    slug: "org-fair-tabling",
    description:
      "Come see us at the Org Fair to learn about the club, meet our exec members and connect with some fellow photographers.",
    startDate: "2026-09-02T11:00:00-04:00",
    endDate: "2026-09-02T13:00:00-04:00",
    location: "Ech Green",
    image: "/images/photos/campus-portrait.jpg",
    imageAlt: "Aerial view of Georgia Tech's Tech Tower on campus",
    type: "social",
    featured: true,
  }, 
  {
    id: "fall-kickoff",
    title: "Fall Kickoff Meeting",
    slug: "fall-kickoff-meeting",
    description:
      "Meet the club, learn about upcoming photo walks, workshops, and the darkroom, and connect with photographers of every experience level.",
    startDate: "2026-09-02T18:30:00-04:00",
    endDate: "2026-09-02T20:00:00-04:00",
    location: "Skiles Classroom Building, Room 314",
    image: "/images/events/fall-kickoff.jpg",
    imageAlt: "Students gathering at a Photography Club meeting",
    type: "social",
    featured: true,
  },
  {
    id: "campus-photo-walk-sep-12",
    title: "Campus Photo Walk",
    slug: "campus-photo-walk-sep-12",
    description:
      "[TENTATIVE] Join us on a walk around the Georgia Tech Campus. We'll explore different scenic parts of campus, including Tech Tower, CULC, Skiles Walkway, Old Campus, Ech Green, and more! Whether you're new to Tech or been here for years, it's also fun to explore the beautiful places around you. We're still working on the exact time — we'll post it once it's sorted out. Don't have a camera? The Georgia Tech Library rents out camera equipment for a few days at a time: https://library.gatech.edu/spaces-technology/gadgets. Bring your walking shoes and camera (or phone), and be ready for a super awesome photo walk!",
    startDate: "2026-09-12T10:00:00-04:00",
    endDate: "2026-09-12T13:00:00-04:00",
    location: "Clough Undergraduate Learning Commons",
    image: "/images/hero/tech-green-evening.jpg",
    imageAlt: "Georgia Tech's Clough Undergraduate Learning Commons seen from Tech Green",
    type: "photo-walk",
  },
  {
    id: "print-social-sep-20",
    title: "Print Social",
    slug: "print-social-sep-20",
    description:
      "Join us for our first print social in IC room 215! Fill out the submission form if you'd like us to print one of your photos — we'll hand them out at the social (limit one photo per person, so pick your best shot). It's also a great chance to meet fellow Tech students who share an interest in photography, talk shop, and hang out.",
    startDate: "2026-09-20T13:00:00-04:00",
    endDate: "2026-09-20T16:00:00-04:00",
    location: "Instructional Center, Room 215",
    image: "/images/events/print-social-sep-20.jpg",
    imageAlt: "An Instax camera held over a pile of printed instant photos",
    type: "social",
  },
  {
    id: "linkedin-headshot-volunteers",
    title: "Volunteer: LinkedIn Headshot Photographers",
    slug: "linkedin-headshot-volunteers",
    description:
      "Dr. Ian Krout, a faculty member in the Neuroscience Undergraduate Program, is looking for photographers to volunteer taking professional headshots at his LinkedIn Workshop. Backdrops and props are handled — just show up with your camera. If you'd like to be involved, show up to the event. It will be held in the Highlands Room of the Exhibition Hall.",
    startDate: "2026-09-10T11:00:00-04:00",
    endDate: "2026-09-10T12:30:00-04:00",
    location: "Exhibition Hall",
    image: "/images/events/linkedin-headshot-volunteers.jpg",
    imageAlt: "A facilitator leading a workshop for a seated group",
    type: "social",
  },
  /**
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
    image: "/images/events/beginner-basics-workshop.jpg",
    imageAlt: "Beginner photography workshop with cameras on a table",
    type: "workshop",
    level: "Beginner friendly",
  },
  {
    id: "piedmont-park-photo-walk",
    title: "Piedmont Park Golden Hour Walk",
    slug: "piedmont-park-golden-hour-walk",
    description:
      "A relaxed golden-hour walk through Piedmont Park focused on light, landscape, and portrait practice.",
    startDate: "2026-09-20T17:30:00-04:00",
    location: "Piedmont Park, Atlanta",
    image: "/images/events/piedmont-park-photo-walk.jpg",
    imageAlt: "Golden hour light in Piedmont Park",
    type: "photo-walk",
  },
  {
    id: "film-101-workshop",
    title: "Workshop: Film Photography 101",
    slug: "film-photography-101-workshop",
    description:
      "An introduction to shooting on film — loading a camera, metering by eye, and what to expect once your roll heads to the darkroom.",
    startDate: "2026-10-04T18:30:00-04:00",
    location: "Georgia Tech Campus — room TBD",
    image: "/images/events/film-101-workshop.jpg",
    imageAlt: "Film camera and rolls of film on a table",
    type: "workshop",
    level: "All levels",
  },
  {
    id: "beltline-photo-walk",
    title: "Atlanta BeltLine Photo Walk",
    slug: "atlanta-beltline-photo-walk",
    description:
      "Walk a stretch of the BeltLine and practice street photography, candid moments, and public art shots.",
    startDate: "2026-10-11T17:30:00-04:00",
    location: "Atlanta BeltLine — Eastside Trail",
    image: "/images/events/beltline-photo-walk.jpg",
    imageAlt: "The Atlanta BeltLine Eastside Trail",
    type: "photo-walk",
  },
  {
    id: "bw-darkroom-workshop",
    title: "Workshop: Black & White Darkroom Printing",
    slug: "black-and-white-darkroom-printing-workshop",
    description:
      "Hands-on with our new darkroom — learn to develop and print black & white film from start to finish.",
    startDate: "2026-10-25T18:30:00-04:00",
    location: "Photography Club Darkroom",
    image: "/images/events/bw-darkroom-workshop.jpg",
    imageAlt: "Black and white prints hanging to dry in a darkroom",
    type: "workshop",
    level: "All levels",
    featured: true,
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
    image: "/images/events/composition-editing-workshop.jpg",
    imageAlt: "Photo editing on a laptop screen",
    type: "workshop",
    level: "All levels",
  },
  {
    id: "fourth-ward-photo-walk",
    title: "Historic Fourth Ward Photo Walk",
    slug: "historic-fourth-ward-photo-walk",
    description:
      "Explore the Historic Fourth Ward Park and surrounding neighborhood for a mix of nature and urban shots.",
    startDate: "2026-11-15T17:00:00-05:00",
    location: "Historic Fourth Ward Park, Atlanta",
    image: "/images/events/fourth-ward-photo-walk.jpg",
    imageAlt: "Historic Fourth Ward Park in Atlanta",
    type: "photo-walk",
  },
  {
    id: "fall-exhibition",
    title: "Fall Exhibition: Perspectives",
    slug: "fall-exhibition-perspectives",
    description:
      "Our end-of-semester exhibition featuring printed work from club members across every category — portraits, street, film, and more. Open to the whole Georgia Tech community.",
    startDate: "2026-12-03T18:00:00-05:00",
    location: "Georgia Tech Campus — venue TBD",
    image: "/images/events/fall-exhibition.jpg",
    imageAlt: "Gallery wall of framed student photography prints",
    type: "exhibition",
    featured: true,
  },
  {
    id: "end-of-semester-social",
    title: "End of Semester Print Social",
    slug: "end-of-semester-print-social",
    description:
      "Bring your favorite shots from the semester to share and print — a low-key wrap-up before finals.",
    startDate: "2026-12-06T18:00:00-05:00",
    location: "Georgia Tech Campus — room TBD",
    image: "/images/events/end-of-semester-social.jpg",
    imageAlt: "Students reviewing printed photographs together",
    type: "print-social",
  }, */
];

/**
 * Only shows events that haven't ended yet, sorted soonest-first, so a
 * forgotten past event doesn't linger on the page.
 */
export const upcomingEvents: ClubEvent[] = allEvents
  .filter((event) => new Date(event.endDate ?? event.startDate) >= new Date())
  .sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
  );

export const featuredEvents = upcomingEvents.filter((event) => event.featured);
