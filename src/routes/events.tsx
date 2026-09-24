import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { accentBg, events, type CampusEvent } from "@/data/campus";
import { Chips, PageHero, SectionHeading } from "@/components/site/kit";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Smart Campus" },
      { name: "description", content: "Workshops, hackathons, seminars, cultural nights and sports across the Smart Campus calendar." },
      { property: "og:title", content: "Events — Smart Campus" },
      { property: "og:description", content: "Discover featured, upcoming and past events on campus." },
    ],
  }),
  component: EventsPage,
});

const cats = ["All", "Workshops", "Hackathons", "Seminars", "Cultural", "Sports", "Technical"];

function EventCard({ e }: { e: CampusEvent }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-card pop pop-hover">
      <div className={`relative h-32 ${accentBg[e.accent]}`}>
        <div className="absolute inset-0 stripes" aria-hidden />
        <span className="absolute left-4 top-4 rounded-full bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] pop-sm">
          {e.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl uppercase">{e.title}</h3>
        <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
          {e.date} · {e.time} · {e.venue}
        </p>
        <p className="mt-3 flex-1 text-sm text-muted-foreground">{e.desc}</p>
        <button className="mt-5 rounded-lg bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground pop-sm">
          Register
        </button>
      </div>
    </article>
  );
}

function EventsPage() {
  const [cat, setCat] = useState("All");
  const match = (e: CampusEvent) => cat === "All" || e.category === cat;
  const groups: [string, CampusEvent[]][] = [
    ["Featured Events", events.filter((e) => e.when === "featured" && match(e))],
    ["Upcoming Events", events.filter((e) => e.when === "upcoming" && match(e))],
    ["Past Events", events.filter((e) => e.when === "past" && match(e))],
  ];

  return (
    <>
      <PageHero
        kicker="Events"
        title="What's happening"
        desc="Filter the campus calendar by the kind of event you care about."
        accent="yellow"
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <Chips options={cats} value={cat} onChange={setCat} />
        {groups.map(([title, list]) =>
          list.length ? (
            <div key={title} className="mb-14">
              <SectionHeading title={title} accent="coral" />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {list.map((e) => (
                  <EventCard key={e.title} e={e} />
                ))}
              </div>
            </div>
          ) : null,
        )}
        {groups.every(([, l]) => l.length === 0) ? (
          <p className="text-sm text-muted-foreground">Nothing scheduled in this category right now.</p>
        ) : null}
      </section>
    </>
  );
}
