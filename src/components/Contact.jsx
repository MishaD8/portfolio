import { site } from "../data/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl border-t border-line px-6 py-16">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-fg">
        Contact
      </h2>
      <p className="mt-6 text-muted">Reach me at</p>
      <p className="mt-2">
        <a
          href={"mailto:" + site.email}
          className="font-display text-lg text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-fg/60"
        >
          {site.email}
        </a>
      </p>
      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {site.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
