'use client';

import { Braces, Clock, ShieldCheck } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Weeks of setup time across teams',
    description:
      'Every project repeats the same work: linting, CI, routing, auth, styling, and build tooling.',
  },
  {
    icon: Braces,
    title: 'Inconsistent stack decisions',
    description:
      'Teams drift into different configs, scripts, and conventions that slow onboarding.',
  },
  {
    icon: ShieldCheck,
    title: 'Broken defaults in starter kits',
    description:
      'Outdated templates and brittle dependencies create hidden debt before you ship.',
  },
];

export default function ProblemStatement() {
  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-left">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            The drag you feel <span className="gradient-text">is real</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            BlueprintKit compresses setup work into a single command so you can
            move straight into building.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-8 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="mb-4 inline-flex rounded-lg bg-primary/15 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
