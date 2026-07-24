import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { RsvpForm } from "@/components/rsvp-form";
import { rsvpConfig } from "@/content/rsvp-config";

export default function RsvpPage() {
  return (
    <PageShell
      title="RSVP"
      intro="Please submit your RSVP using the form below. If it does not load, use the direct link."
    >
      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-stone-900">Important Notes</h2>
        <p className="mt-2 text-sm text-stone-700">Deadline: {rsvpConfig.guidance.deadline}</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-stone-700">
          {rsvpConfig.guidance.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <RsvpForm
          formId={rsvpConfig.formId}
          guestNameEntryId={rsvpConfig.entries.guestName}
          attendanceEntryId={rsvpConfig.entries.attendance}
          guestsEntryId={rsvpConfig.entries.guests}
          defaultGuestName={rsvpConfig.defaults.guestName}
          defaultAttendance={rsvpConfig.defaults.attendance}
          defaultGuests={rsvpConfig.defaults.guests}
        />
      </section>

      <section className="mt-6 rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-5 text-sm text-stone-700">
        <p className="font-medium text-stone-900">Having trouble with the RSVP form?</p>
        <p className="mt-2">
          <Link
            href={rsvpConfig.formViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-stone-900 underline underline-offset-4"
          >
            Open RSVP form in a new tab
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
