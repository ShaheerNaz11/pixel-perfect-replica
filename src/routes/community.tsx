import { createFileRoute } from "@tanstack/react-router";
import { accentBg, clubs, stories } from "@/data/campus";
import { PageHero, SectionHeading } from "@/components/site/kit";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Smart Campus" },
      { name: "description", content: "Campus stories, student achievements, faculty research and 40+ clubs at Smart Campus." },
      { property: "og:title", content: "Community — Smart Campus" },
      { property: "og:description", content: "Stories and clubs that make up campus life." },
    ],
  }),
  component: Community,
});

function Community() {
  return (
    <>
      <PageHero
        kicker="Community"
        title="Campus stories"
        desc="Achievements, research, clubs and initiatives from across the campus."
        accent="pink"
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <SectionHeading eyebrow="Feed" title="Campus Stories" accent="coral" />
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {stories.map((s) => (
            <article key={s.title} className="mb-6 break-inside-avoid rounded-xl bg-card p-6 pop pop-hover">
              <span className={`inline-block rounded-full ${accentBg[s.accent]} px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-on-bright`}>
                {s.tag}
              </span>
              <h3 className="mt-4 text-xl uppercase">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t-[3px] border-border bg-muted py-14">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Join in" title="Clubs" accent="purple" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clubs.map((c) => (
              <article key={c.name} className="rounded-xl bg-card p-6 pop pop-hover">
                <span className={`flex h-14 w-14 items-center justify-center rounded-xl ${accentBg[c.accent]} text-2xl pop-sm`}>
                  {c.emoji}
                </span>
                <h3 className="mt-4 text-xl uppercase">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide">
                  <span className="rounded-full bg-muted px-3 py-1 pop-sm">{c.members} members</span>
                </div>
                <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">Next: {c.next}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
