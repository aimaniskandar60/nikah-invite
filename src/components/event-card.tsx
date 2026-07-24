import type { EventDetails } from "@/content/site-content";

type EventCardProps = {
  event: EventDetails;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-stone-900">{event.title}</h2>
      <p className="mt-1 text-stone-700">{event.date}</p>
      <p className="mt-4 font-medium text-stone-900">{event.venue}</p>
      <p className="text-stone-700">{event.address}</p>
      <p className="mt-3">
        <a
          className="font-medium text-stone-900 underline underline-offset-4"
          href={event.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Maps
        </a>
      </p>

      <h3 className="mt-6 text-sm font-semibold tracking-wide text-stone-900">Schedule</h3>
      <ul className="mt-3 space-y-2 text-sm text-stone-700">
        {event.schedule.map((item) => (
          <li key={`${event.title}-${item.label}`} className="flex items-center justify-between gap-4">
            <span>{item.label}</span>
            <span className="font-medium text-stone-900">{item.time}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
