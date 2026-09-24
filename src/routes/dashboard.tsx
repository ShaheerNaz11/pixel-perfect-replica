import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { accentBg, announcements, stats } from "@/data/campus";
import { Bar, Counter, PageHero, SectionHeading } from "@/components/site/kit";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Smart Campus" },
      { name: "description", content: "Campus overview, activity charts, notifications and quick actions in the Smart Campus dashboard." },
      { property: "og:title", content: "Dashboard — Smart Campus" },
      { property: "og:description", content: "A live overview of students, faculty, events and campus activity." },
    ],
  }),
  component: Dashboard,
});

const participation = [
  { label: "Jun", value: 52 },
  { label: "Jul", value: 61 },
  { label: "Aug", value: 74 },
  { label: "Sep", value: 68 },
  { label: "Oct", value: 88 },
  { label: "Nov", value: 79 },
];

const attendance = [
  { label: "Hackathons", value: 92, accent: "purple" as const },
  { label: "Workshops", value: 78, accent: "blue" as const },
  { label: "Seminars", value: 64, accent: "mint" as const },
  { label: "Cultural", value: 86, accent: "pink" as const },
];

const clubActivity = [
  { label: "AI Club", value: 84, accent: "purple" as const },
  { label: "Coding Club", value: 91, accent: "blue" as const },
  { label: "Robotics", value: 67, accent: "coral" as const },
  { label: "Cultural", value: 73, accent: "pink" as const },
];

const energy = [
  { label: "Solar generated", value: 64, accent: "yellow" as const },
  { label: "Grid usage", value: 36, accent: "coral" as const },
  { label: "Efficiency score", value: 81, accent: "mint" as const },
];

const quick = [
  { label: "Campus Map", to: "/campus", accent: "blue" as const },
  { label: "Events", to: "/events", accent: "coral" as const },
  { label: "Clubs", to: "/community", accent: "purple" as const },
  { label: "Facilities", to: "/facilities", accent: "mint" as const },
  { label: "Faculty", to: "/faculty", accent: "yellow" as const },
  { label: "Announcements", to: "/students", accent: "pink" as const },
];

function Dashboard() {
  const [bell, setBell] = useState(false);

  return (
    <>
      <PageHero
        kicker="Dashboard"
        title="Campus control room"
        desc="Overview, activity and alerts across the entire Smart Campus."
        accent="blue"
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-8 flex items-start justify-between gap-4">
          <SectionHeading eyebrow="Overview" title="At a glance" accent="purple" />
          <div className="relative">
            <button
              onClick={() => setBell((b) => !b)}
              aria-expanded={bell}
              className="rounded-lg bg-card px-4 py-3 text-sm font-bold uppercase pop-sm"
            >
              🔔 <span className="ml-1">3</span>
            </button>
            {bell ? (
              <div className="reveal absolute right-0 z-30 mt-3 w-72 rounded-xl bg-card p-4 pop-lg">
                <ul className="space-y-3">
                  {announcements.map((a) => (
                    <li key={a.title} className="rounded-lg bg-background p-3 pop-sm">
                      <p className={`inline-block rounded-full ${accentBg[a.accent]} px-2 py-0.5 text-[10px] font-bold uppercase text-on-bright`}>
                        {a.title}
                      </p>
                      <p className="mt-2 text-sm">{a.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className={`rounded-xl ${accentBg[s.accent]} p-5 text-on-bright pop`}>
              <p className="font-display text-3xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em]">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl bg-card p-6 pop">
            <h2 className="text-xl uppercase">Student participation</h2>
            <div className="mt-6 flex h-48 items-end gap-3">
              {participation.map((p) => (
                <div key={p.label} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-lg bg-blue pop-sm transition-all duration-700"
                    style={{ height: `${p.value}%` }}
                  />
                  <span className="text-[10px] font-bold uppercase text-muted-foreground">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-card p-6 pop">
            <h2 className="text-xl uppercase">Event attendance</h2>
            <div className="mt-6 space-y-4">
              {attendance.map((a) => (
                <Bar key={a.label} {...a} />
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-card p-6 pop">
            <h2 className="text-xl uppercase">Club activity</h2>
            <div className="mt-6 space-y-4">
              {clubActivity.map((c) => (
                <Bar key={c.label} {...c} />
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-card p-6 pop">
            <h2 className="text-xl uppercase">Campus energy usage</h2>
            <div className="mt-6 space-y-4">
              {energy.map((e) => (
                <Bar key={e.label} {...e} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-[3px] border-border bg-muted py-14">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Shortcuts" title="Quick Actions" accent="coral" />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
            {quick.map((q) => (
              <Link
                key={q.label}
                to={q.to}
                className={`rounded-xl ${accentBg[q.accent]} p-5 text-center font-display text-sm uppercase text-on-bright pop pop-hover`}
              >
                {q.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
