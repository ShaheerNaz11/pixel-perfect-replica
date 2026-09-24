import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { accentBg, places, type Place } from "@/data/campus";
import { Btn, Chips, Modal, PageHero, SectionHeading } from "@/components/site/kit";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "Campus Explorer — Smart Campus" },
      { name: "description", content: "Explore labs, blocks, sports grounds and facilities on the interactive Smart Campus map." },
      { property: "og:title", content: "Campus Explorer — Smart Campus" },
      { property: "og:description", content: "An interactive map of every block, lab and facility on campus." },
    ],
  }),
  component: CampusPage,
});

const filters = ["All", "Academic", "Facilities", "Sports", "Hostel"];

function CampusPage() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<Place | null>(null);
  const shown = places.filter((p) => filter === "All" || p.category === filter);

  return (
    <>
      <PageHero
        kicker="Campus Explorer"
        title="Explore the campus"
        desc="Tap any location on the map to see capacity, status and technology inside."
        accent="purple"
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <Chips options={filters} value={filter} onChange={setFilter} />

        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-muted pop-lg">
          <div className="absolute inset-0 dotgrid" aria-hidden />
          <div className="absolute left-[10%] top-[60%] h-24 w-24 rounded-full bg-mint/60" aria-hidden />
          <div className="absolute right-[12%] top-[10%] h-20 w-32 rotate-6 bg-yellow/50" aria-hidden />
          {shown.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-lg ${accentBg[p.accent]} px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-on-bright pop-sm transition-transform hover:-translate-y-[60%] sm:text-xs`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Btn variant="solid">Virtual Tour</Btn>
          <Btn variant="bright">Campus Guide</Btn>
          <Btn variant="ghost">Download Map</Btn>
        </div>
      </section>

      <section className="border-t-[3px] border-border bg-muted py-14">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Directory" title="All locations" accent="blue" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <button key={p.id} onClick={() => setActive(p)} className="rounded-xl bg-card p-6 text-left pop pop-hover">
                <span className={`inline-block rounded-full ${accentBg[p.accent]} px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-on-bright`}>
                  {p.category}
                </span>
                <h3 className="mt-4 text-xl uppercase">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide">{p.status}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Modal open={!!active} onClose={() => setActive(null)}>
        {active ? (
          <div>
            <span className={`inline-block rounded-full ${accentBg[active.accent]} px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-on-bright`}>
              {active.category}
            </span>
            <h2 className="mt-4 text-3xl uppercase">{active.name}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{active.detail}</p>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-background p-3 pop-sm">
                <dt className="text-xs uppercase text-muted-foreground">Capacity</dt>
                <dd className="font-display text-lg">{active.capacity}</dd>
              </div>
              <div className="rounded-lg bg-background p-3 pop-sm">
                <dt className="text-xs uppercase text-muted-foreground">Status</dt>
                <dd className="font-display text-lg">{active.status}</dd>
              </div>
              <div className="col-span-2 rounded-lg bg-background p-3 pop-sm">
                <dt className="text-xs uppercase text-muted-foreground">Technology</dt>
                <dd className="font-display text-lg">{active.tech}</dd>
              </div>
            </dl>
          </div>
        ) : null}
      </Modal>
    </>
  );
}
