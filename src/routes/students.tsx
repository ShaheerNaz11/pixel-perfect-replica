import { createFileRoute } from "@tanstack/react-router";
import { accentBg, events } from "@/data/campus";
import { Bar, Counter, PageHero, SectionHeading } from "@/components/site/kit";

export const Route = createFileRoute("/students")({
  head: () => ({
    meta: [
      { title: "Student Hub — Smart Campus" },
      { name: "description", content: "Classes, attendance, assignments, exams, events and student life in one Smart Campus hub." },
      { property: "og:title", content: "Student Hub — Smart Campus" },
      { property: "og:description", content: "Your classes, attendance, assignments and campus life at a glance." },
    ],
  }),
  component: Students,
});

const cards = [
  { label: "Today's Classes", value: 3, suffix: "", accent: "blue" as const },
  { label: "Attendance", value: 92, suffix: "%", accent: "mint" as const },
  { label: "Assignments", value: 5, suffix: "", accent: "coral" as const },
  { label: "Upcoming Exams", value: 2, suffix: "", accent: "yellow" as const },
];

const life = [
  { title: "Clubs", desc: "40+ active student clubs across campus.", accent: "purple" as const },
  { title: "Hackathons", desc: "Build with mentors over 48-hour sprints.", accent: "blue" as const },
  { title: "Sports", desc: "Inter-department leagues every season.", accent: "mint" as const },
  { title: "Cultural Events", desc: "Theatre, music and festival nights.", accent: "pink" as const },
  { title: "Workshops", desc: "Hands-on labs with industry trainers.", accent: "coral" as const },
];

function Students() {
  return (
    <>
      <PageHero
        kicker="Student Hub"
        title="Your campus day"
        desc="Everything a student needs — schedule, progress, events and campus life."
        accent="mint"
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.label} className={`rounded-xl ${accentBg[c.accent]} p-6 text-on-bright pop pop-hover`}>
              <p className="font-display text-5xl">
                <Counter value={c.value} suffix={c.suffix} />
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em]">{c.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-xl bg-card p-6 pop">
            <h2 className="text-2xl uppercase">Upcoming Events</h2>
            <ul className="mt-5 space-y-3">
              {events
                .filter((e) => e.when !== "past")
                .slice(0, 4)
                .map((e) => (
                  <li key={e.title} className="flex items-center gap-4 rounded-lg bg-background p-4 pop-sm">
                    <span className={`flex h-12 w-14 flex-col items-center justify-center rounded-lg ${accentBg[e.accent]} text-on-bright`}>
                      <span className="font-display text-sm">{e.date}</span>
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-base uppercase">{e.title}</span>
                      <span className="block text-xs text-muted-foreground">
                        {e.time} · {e.venue}
                      </span>
                    </span>
                  </li>
                ))}
            </ul>
          </div>

          <div className="rounded-xl bg-card p-6 pop">
            <h2 className="text-2xl uppercase">Student Spotlight</h2>
            <div className="mt-5 flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-purple font-display text-xl text-on-bright pop-sm">
                AK
              </span>
              <div>
                <p className="font-display text-lg uppercase">Aisha Khan</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">B.Tech AI & DS · Final Year</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Led Team Nexus to first place at the National AI Challenge with a crop-disease detection model now piloted by two agri-tech startups.
            </p>
            <div className="mt-5 space-y-4">
              <Bar label="Research output" value={88} accent="purple" />
              <Bar label="Club leadership" value={76} accent="coral" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-[3px] border-border bg-muted py-14">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Beyond class" title="Student Life" accent="pink" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {life.map((l) => (
              <div key={l.title} className={`rounded-xl ${accentBg[l.accent]} p-5 text-on-bright pop pop-hover`}>
                <p className="font-display text-xl uppercase">{l.title}</p>
                <p className="mt-2 text-sm">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
