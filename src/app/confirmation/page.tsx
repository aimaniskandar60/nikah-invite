import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { siteContent } from "@/content/site-content";

export default function ConfirmationPage() {
  const primaryContact = siteContent.contacts[0];

  return (
    <PageShell
      title="Thank You"
      intro="Jazakumullahu khairan for taking the time to respond."
    >
      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <p className="text-stone-700">
          If you have submitted your RSVP, we have received your response.
          {primaryContact
            ? (
                <>
                  {" "}
                  For updates, please contact <strong className="text-stone-900">{primaryContact.name}</strong> at{" "}
                  <strong className="text-stone-900">{primaryContact.phone}</strong>.
                </>
              )
            : null}
        </p>
        <p className="mt-4">
          <Link href="/" className="font-medium text-stone-900 underline underline-offset-4">
            Return to Home
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
