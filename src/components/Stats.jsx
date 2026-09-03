import { site } from "../data/site";

export default function Stats() {
  return (
    <section className="mx-auto max-w-4xl border-t border-line px-6 py-10">
      <dl className="flex flex-wrap gap-10 sm:gap-16">
        {site.stats.map((s) => (
          <div key={s.label}>
            <dt className="font-display text-3xl font-semibold text-fg sm:text-4xl">
              {s.value}
            </dt>
            <dd className="mt-1 text-xs text-faint sm:text-sm">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
