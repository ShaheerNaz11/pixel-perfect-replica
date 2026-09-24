import { createFileRoute } from "@tanstack/react-router";
import { accentBg, facilities } from "@/data/campus";
import { PageHero, SectionHeading } from "@/components/site/kit";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — Smart Campus" },
      { name: "description", content: "Smart classrooms, AI and IoT labs, digital library, innovation center, sports and hostel facilities." },
      { property: "og:title", content: "Facilities — Smart Campus" },
      { property: "og:description", content: "Every facility on campus with capacity, availability and location." },
    ],
  }),
  component: Facilities,
});

function Facilities() {
  return (
    <>
      <PageHero
        kicker="Facilities"
        title="Built for learning"
        desc="Twenty-five facilities keeping the campus running from lab to ground."
        accent="mint"
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <SectionHeading eyebrow="Directory" title="All facilities" accent="blue" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <article key={f.name} className="flex flex-col overflow-hidden rounded-xl bg-card pop pop-hover">
              <div className={`relative flex h-28 items-center justify-center ${accentBg[f.accent]} text-4xl`}>
                <div className="absolute inset-0 dotgrid" aria-hidden />
                <span className="relative">{f.emoji}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl uppercase">{f.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{f.desc}</p>
                <dl className="mt-5 space-y-1 text-xs font-bold uppercase tracking-wide">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Capacity</dt>
                    <dd>{f.capacity}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Availability</dt>
                    <dd>{f.availability}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Location</dt>
                    <dd>{f.location}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
