import { Hero } from "@/components/home/hero";
import { Container } from "@/components/ui/container";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        id="featured-work"
        className="bg-[#f7f6f2] py-24 sm:py-32"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
              Featured work
            </p>

            <h2 className="font-display max-w-4xl text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">
              Photography created by students who see the world differently.
            </h2>
          </div>

          <div className="mt-16 min-h-[480px] rounded-3xl bg-neutral-200" />
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <p className="text-sm text-neutral-500">
            Upcoming events section coming next.
          </p>
        </Container>
      </section>
    </>
  );
}