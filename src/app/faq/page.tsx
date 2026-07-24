import { PageShell } from "@/components/page-shell";
export default function FaqPage() {
  return (
    <PageShell
      title="FAQ & Guidance"
      intro="A few common questions to make the day smoother for everyone."
    >
      <article className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-stone-900">Planning Notes</h2>
        <p className="mt-2 text-stone-700">
          This page is currently a placeholder. The core invitation journey now lives on the home page as
          Hero, Event Details, and RSVP in one continuous flow.
        </p>
      </article>
    </PageShell>
  );
}
