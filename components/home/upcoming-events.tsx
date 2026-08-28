import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import { EventCard } from "@/components/events/event-card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { upcomingEvents } from "@/data/events";

export function UpcomingEvents() {
  const nextEvents = upcomingEvents.slice(0, 3);

  return (
    <section className="bg-paper pb-16 pt-12 sm:pb-20 sm:pt-16">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="What's next"
            title="Photo walks, workshops, and exhibitions."
            description="Photo walks run about twice a month, workshops run monthly on a new topic, and our exhibition closes out the semester."
          />

          <TextLink href="/events" className="text-ink">
            See all events
          </TextLink>
        </div>

        <RevealGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {nextEvents.map((event) => (
            <RevealItem key={event.id}>
              <EventCard event={event} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
