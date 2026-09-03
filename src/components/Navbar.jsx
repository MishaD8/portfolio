import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/me.jpg"
            alt="Mykhaylo Dyachenko"
            className="h-9 w-9 shrink-0 rounded-full border border-line object-cover"
          />
          <span className="font-display text-sm font-medium tracking-tight text-fg">
            Mykhaylo Dyachenko
          </span>
        </a>
        <div className="flex items-center gap-5 sm:gap-7">
          <ul className="hidden items-center gap-5 text-sm text-muted sm:flex sm:gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
