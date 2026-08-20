import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import { EventCard } from "@/components/events/event-card";
import { upcomingEvents } from "@/data/events";

export function UpcomingEvents() {
  const nextEvents = upcomingEvents.slice(0, 3);

  return (
    <section className="bg-[#f7f6f2] py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="What's next"
            title="Photo walks, workshops, and exhibitions."
            description="Photo walks run about twice a month, workshops run monthly on a new topic, and our exhibition closes out the semester."
          />

          <TextLink href="/events" className="text-neutral-900">
            See all events
          </TextLink>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nextEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </section>
  );
}
