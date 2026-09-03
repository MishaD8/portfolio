import { site } from "../data/site";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pb-16 pt-16 sm:pb-20 sm:pt-28">
      <div className="hero-in">
        <h1 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl">
          From 52 countries
          <br />
          to cloud.
        </h1>
        <p className="mt-6 text-base text-muted sm:text-lg">
          {site.stack.join("  •  ")}
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
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
      </div>
    </section>
  );
}
