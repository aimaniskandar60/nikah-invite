import { RsvpForm } from "@/components/rsvp-form";
import { rsvpConfig } from "@/content/rsvp-config";
import { siteContent } from "@/content/site-content";

export default function Home() {
  const event = siteContent.events[0];

  if (!event) {
    return (
      <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
        <h1 className="text-4xl font-semibold text-stone-900">Nikah Invitation</h1>
        <p className="mt-3 text-stone-700">Event details will be added soon.</p>
      </main>
    );
  }

  return (
    <main>
      <section id="hero" className="relative overflow-hidden border-b border-stone-200/70 bg-[#f8f4ee]">
        <div className="mx-auto w-full max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-24">
          <p className="font-arabic text-2xl text-stone-700 sm:text-3xl">
            السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
          </p>
          <h1 className="mt-8 text-5xl font-semibold leading-tight text-stone-900 sm:text-7xl">
            {siteContent.couple.partnerOne} & {siteContent.couple.partnerTwo}
          </h1>
          <p className="mt-5 text-lg text-stone-700 sm:text-xl">{event.date}</p>
          <p className="mx-auto mt-5 max-w-3xl text-base text-stone-700 sm:text-lg">{siteContent.introLine}</p>
          <p className="mx-auto mt-8 max-w-2xl text-base text-stone-700 sm:text-lg">{siteContent.tagline}</p>
        </div>
      </section>

      <section id="event-details" className="border-b border-stone-200/70 bg-[#fcfaf7]">
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-4xl font-semibold text-stone-900 sm:text-5xl">Event Details</h2>

          <article className="mt-8 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm uppercase tracking-[0.16em] text-stone-500">{event.title}</p>
            <p className="mt-3 text-3xl text-stone-900">{event.venue}</p>
            <p className="mt-2 text-stone-700">{event.address}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-900 hover:bg-stone-100"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 21s7-5.85 7-11a7 7 0 1 0-14 0c0 5.15 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                Location
              </a>
              {event.calendarUrl ? (
                <a
                  href={event.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-700"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M12 13v5M9.5 15.5h5" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                  Add to Calendar
                </a>
              ) : null}
            </div>

            <h3 className="mt-8 text-lg font-semibold text-stone-900">Schedule</h3>
            <ul className="mt-4 space-y-3">
              {event.schedule.map((item) => (
                <li
                  key={`${event.title}-${item.label}`}
                  className="flex items-center justify-between rounded-xl border border-stone-200 bg-stone-50 px-4 py-3"
                >
                  <span className="text-stone-700">{item.label}</span>
                  <span className="font-semibold text-stone-900">{item.time}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="rsvp" className="bg-[#f8f4ee]">
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-4xl font-semibold text-stone-900 sm:text-5xl">RSVP</h2>
          <p className="mt-3 text-stone-700">Please respond by {siteContent.rsvpDeadline}.</p>

          <div className="mt-8">
            <RsvpForm
              formId={rsvpConfig.formId}
              guestNameEntryId={rsvpConfig.entries.guestName}
              attendanceEntryId={rsvpConfig.entries.attendance}
              guestsEntryId={rsvpConfig.entries.guests}
              defaultGuestName={rsvpConfig.defaults.guestName}
              defaultAttendance={rsvpConfig.defaults.attendance}
              defaultGuests={rsvpConfig.defaults.guests}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
