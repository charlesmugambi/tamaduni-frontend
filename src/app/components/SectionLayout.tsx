import React from "react";

interface SectionLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function SectionLayout({ title, children }: SectionLayoutProps) {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}