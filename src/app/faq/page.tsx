import { PageShell } from "@/components/page-shell";
import { siteContent } from "@/content/site-content";

export default function FaqPage() {
  return (
    <PageShell
      title="FAQ & Guidance"
      intro="A few common questions to make the day smoother for everyone."
    >
      <div className="space-y-4">
        {siteContent.faq.map((item) => (
          <article key={item.question} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-stone-900">{item.question}</h2>
            <p className="mt-2 text-stone-700">{item.answer}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
