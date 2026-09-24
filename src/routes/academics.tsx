import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { accentBg, departments } from "@/data/campus";
import { Modal, PageHero, SectionHeading } from "@/components/site/kit";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Smart Campus" },
      { name: "description", content: "Six departments, undergraduate and postgraduate programs, labs and faculty strength at Smart Campus." },
      { property: "og:title", content: "Academics — Smart Campus" },
      { property: "og:description", content: "Departments, programs and labs across the Smart Campus." },
    ],
  }),
  component: Academics,
});

function Academics() {
  const [open, setOpen] = useState<number | null>(null);
  const dept = open === null ? null : departments[open];

  return (
    <>
      <PageHero
        kicker="Academics"
        title="Departments & programs"
        desc="Six departments running 100+ courses with dedicated research labs."
        accent="blue"
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <SectionHeading eyebrow="Directory" title="Explore departments" accent="purple" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((d, i) => (
            <article key={d.name} className="flex flex-col rounded-xl bg-card p-6 pop pop-hover">
              <span className={`h-3 w-16 rounded-full ${accentBg[d.accent]}`} aria-hidden />
              <h3 className="mt-4 text-xl uppercase">{d.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{d.short}</p>
              <div className="mt-5 flex gap-2 text-xs font-bold uppercase tracking-wide">
                <span className="rounded-full bg-muted px-3 py-1 pop-sm">{d.faculty} faculty</span>
                <span className="rounded-full bg-muted px-3 py-1 pop-sm">{d.labs} labs</span>
              </div>
              <button
                onClick={() => setOpen(i)}
                className="mt-5 rounded-lg bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground pop-sm"
              >
                View details
              </button>
            </article>
          ))}
        </div>
      </section>

      <Modal open={dept !== null} onClose={() => setOpen(null)}>
        {dept ? (
          <div>
            <h2 className="text-2xl uppercase">{dept.name}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{dept.short}</p>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Programs</p>
            <ul className="mt-2 space-y-2">
              {dept.programs.map((p) => (
                <li key={p} className="rounded-lg bg-background px-3 py-2 text-sm pop-sm">
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className={`rounded-lg ${accentBg[dept.accent]} p-3 text-on-bright pop-sm`}>
                <p className="font-display text-2xl">{dept.faculty}</p>
                <p className="text-xs uppercase tracking-wide">Faculty</p>
              </div>
              <div className="rounded-lg bg-background p-3 pop-sm">
                <p className="font-display text-2xl">{dept.labs}</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Labs</p>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
}
