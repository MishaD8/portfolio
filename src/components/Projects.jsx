import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl border-t border-line px-6 py-16">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-fg">
        Projects
      </h2>

      {projects.length === 0 ? (
        <p className="mt-6 text-muted">
          First project shipping soon — check back shortly.
        </p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-fg/30"
            >
              <h3 className="font-display text-lg font-medium text-fg">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-line px-2 py-0.5 text-xs text-faint"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
