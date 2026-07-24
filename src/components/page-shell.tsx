import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  intro?: string;
  children: ReactNode;
};

export function PageShell({ title, intro, children }: PageShellProps) {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold text-stone-900 sm:text-4xl">{title}</h1>
        {intro ? <p className="max-w-3xl text-stone-700">{intro}</p> : null}
      </header>
      {children}
    </main>
  );
}
