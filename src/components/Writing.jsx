import { useState } from "react";
import { articles } from "../data/articles";

const INITIAL_COUNT = 6;

export default function Writing() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? articles : articles.slice(0, INITIAL_COUNT);
  const hiddenCount = articles.length - INITIAL_COUNT;

  return (
    <section id="writing" className="mx-auto max-w-4xl border-t border-line px-6 py-16">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-fg">
        Writing
      </h2>
      <ul className="mt-8 divide-y divide-line">
        {visible.map((a) => (
          <li key={a.title}>
            <a
              href={a.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-baseline justify-between gap-6 py-4"
            >
              <span className="text-sm text-muted underline-offset-4 group-hover:text-fg group-hover:underline sm:text-base">
                {a.title}
              </span>
              <span className="shrink-0 text-xs text-faint">{a.date}</span>
            </a>
          </li>
        ))}
      </ul>

      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="mt-6 text-sm text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
        >
          {showAll ? "Show less" : `Show all ${articles.length} articles`}
        </button>
      )}
    </section>
  );
}
