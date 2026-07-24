import { EventCard } from "@/components/event-card";
import { PageShell } from "@/components/page-shell";
import { siteContent } from "@/content/site-content";

export default function EventDetailsPage() {
  return (
    <PageShell
      title="Event Details"
      intro="Please review the ceremony and reception timings before attending."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {siteContent.events.map((event) => (
          <EventCard key={event.title} event={event} />
        ))}
      </div>
    </PageShell>
  );
}
