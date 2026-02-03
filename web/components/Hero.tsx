'use client';

import { ArrowUpRight, Sparkles, Terminal } from 'lucide-react';

const stats = [
  { label: 'Templates', value: '15+' },
  { label: 'Setup time', value: '< 2 min' },
  { label: 'License', value: 'MIT' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-28 sm:pt-32 lg:px-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 surface-grid opacity-40" />
        <div className="absolute -left-32 top-12 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-secondary/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              BlueprintKit CLI
            </div>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Launch production-ready stacks without the boilerplate drag.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              BlueprintKit scaffolds real-world projects with strict TypeScript,
              modern tooling, and curated templates for teams who ship fast.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#get-started"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:translate-y-[-1px] hover:shadow-xl hover:shadow-primary/30"
              >
                Get started
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#templates"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground/90 transition hover:border-primary/50 hover:text-primary"
              >
                Browse templates
              </a>
              <a
                href="https://github.com/vickcoo/BlueprintKit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-primary"
              >
                View GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card/60 px-5 py-3"
                >
                  <div className="text-xl font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] border border-border/60 bg-card/60 opacity-70 blur" />
            <div className="relative overflow-hidden rounded-[28px] border border-border bg-card/90 shadow-2xl">
              <div className="flex items-center gap-3 border-b border-border bg-muted/60 px-5 py-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <Terminal className="h-4 w-4 text-primary" />
                CLI Preview
              </div>
              <div className="space-y-5 px-6 py-6 font-mono text-sm">
                <div className="text-muted-foreground">
                  <span className="text-accent">$</span> npx blueprintkit init
                </div>
                <div className="space-y-1 text-muted-foreground">
                  <div>✓ Choose template: nextjs-tailwind</div>
                  <div>✓ Configure linting, tests, CI</div>
                  <div>✓ Install dependencies</div>
                </div>
                <div className="rounded-2xl border border-border bg-background/60 p-4 text-sm text-foreground/90">
                  Ready in 38 seconds. Start coding.
                </div>
                <div className="text-muted-foreground">
                  <span className="text-accent">$</span> npm run dev
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 right-6 rounded-full border border-border bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted-foreground shadow-lg">
              zero setup drag
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
