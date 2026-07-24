import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/event-details", label: "Event Details" },
  { href: "/rsvp", label: "RSVP" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-stone-800">
          NIKAH INVITE
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-4 text-sm text-stone-700">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-stone-950">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
