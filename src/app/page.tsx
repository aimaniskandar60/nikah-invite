import Link from "next/link";
import { EventCard } from "@/components/event-card";
import { PageShell } from "@/components/page-shell";
import { siteContent } from "@/content/site-content";

export default function Home() {
  return (
    <PageShell title="Nikah Invitation" intro={siteContent.introLine}>
      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <p className="text-sm uppercase tracking-[0.2em] text-stone-600">Bismillahirrahmanirrahim</p>
        <h2 className="mt-3 text-2xl font-semibold text-stone-900 sm:text-3xl">
          {siteContent.couple.partnerOne} & {siteContent.couple.partnerTwo}
        </h2>
        <p className="mt-3 max-w-2xl text-stone-700">{siteContent.tagline}</p>
        <p className="mt-6 text-sm font-medium text-stone-900">RSVP deadline: {siteContent.rsvpDeadline}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/rsvp"
            className="rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white hover:bg-stone-700"
          >
            RSVP Now
          </Link>
          <Link
            href="/event-details"
            className="rounded-full border border-stone-300 px-5 py-2 text-sm font-medium text-stone-900 hover:bg-stone-100"
          >
            View Event Details
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        {siteContent.events.map((event) => (
          <EventCard key={event.title} event={event} />
        ))}
      </section>
    </PageShell>
  );
}
