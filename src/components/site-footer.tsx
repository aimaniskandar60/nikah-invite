import { siteContent } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto w-full max-w-5xl px-4 py-8 text-sm text-stone-700 sm:px-6">
        <p className="font-medium text-stone-900">Contact for assistance</p>
        <p>{siteContent.contact.name}</p>
        <p>{siteContent.contact.phone}</p>
        {siteContent.contact.email ? <p>{siteContent.contact.email}</p> : null}
      </div>
    </footer>
  );
}
