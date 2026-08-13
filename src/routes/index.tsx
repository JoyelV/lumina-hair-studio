import { createFileRoute } from "@tanstack/react-router";

import heroSerum from "@/assets/hero-serum.jpg";
import dropperMacro from "@/assets/dropper-macro.jpg";
import serumOverhead from "@/assets/serum-overhead.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LUXÉOL — The Genesis Hair Repair Serum" },
      {
        name: "description",
        content:
          "A molecular hair repair serum engineered to reconstruct disulfide bonds at the cortex. Clinical restoration, cinematic luxury.",
      },
      { property: "og:title", content: "LUXÉOL — The Genesis Hair Repair Serum" },
      {
        property: "og:description",
        content:
          "A molecular hair repair serum engineered to reconstruct disulfide bonds at the cortex.",
      },
    ],
  }),
  component: Index,
});

const composition = [
  {
    name: "18-MEA Lipid Substitute",
    role: "Resurfacing agent",
    meta: "94% POTENCY",
  },
  {
    name: "Keratin Peptide Complex",
    role: "Cortex reinforcement",
    meta: "ISO-CERTIFIED",
  },
  {
    name: "Cold-Pressed Camellia",
    role: "Molecular hydration",
    meta: "COLD-STRICT",
  },
];

function Index() {
  return (
    <div className="bg-background text-foreground">
      <nav className="fixed top-0 left-0 z-50 flex w-full mix-blend-difference items-center justify-between px-8 py-6">
        <span className="font-display text-2xl font-semibold tracking-tight">LUXÉOL</span>
        <div className="hidden gap-12 text-[10px] font-medium uppercase tracking-[0.25em] opacity-60 md:flex">
          <a href="#reconstruction" className="transition-opacity hover:opacity-100">
            Series 01
          </a>
          <a href="#composition" className="transition-opacity hover:opacity-100">
            Science
          </a>
          <a href="#acquire" className="transition-opacity hover:opacity-100">
            Shop
          </a>
        </div>
        <span className="text-[10px] uppercase tracking-[0.25em]">Bag (0)</span>
      </nav>

      {/* Hero */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <div className="animate-light absolute inset-0 z-0">
          <img
            src={heroSerum}
            alt="Dark glass LUXÉOL hair repair serum bottle lit in a charcoal studio"
            width={1920}
            height={1088}
            className="h-full w-full scale-105 object-cover md:translate-x-[20%]"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(12,12,12,0.96)_0%,rgba(12,12,12,0.85)_32%,rgba(12,12,12,0.25)_58%,transparent_78%)]" />

        <div className="animate-reveal relative z-10 mx-auto w-full max-w-[1440px] px-8 md:px-16">
          <div className="max-w-xl space-y-10">
            <div className="space-y-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
                Molecular Repair
              </p>
              <h1 className="font-display text-6xl font-light italic leading-[0.95] text-balance md:text-8xl">
                The Genesis Serum
              </h1>
            </div>
            <p className="max-w-[42ch] text-sm font-light leading-relaxed text-foreground/60 text-pretty md:text-base">
              A biological intervention for cellular hair restoration. Engineered to reconstruct
              disulfide bonds at the cortex level.
            </p>
            <a
              href="#acquire"
              className="inline-block border border-border px-10 py-4 text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 hover:border-accent hover:text-accent"
            >
              Secure Allocation
            </a>
          </div>
        </div>



        <div className="absolute bottom-12 left-1/2 h-12 w-px -translate-x-1/2 bg-foreground/20" />
      </section>

      {/* Reconstruction */}
      <section
        id="reconstruction"
        className="relative bg-surface px-8 py-32 text-surface-foreground md:px-24"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-24 md:grid-cols-2">
          <div className="space-y-12">
            <span className="font-mono text-[10px] tracking-[0.3em] text-surface-foreground/50">
              01 / RECONSTRUCTION
            </span>
            <h2 className="font-display text-5xl italic leading-tight">
              Beyond surface shine.
              <br />
              Scientific structural integrity.
            </h2>
            <p className="max-w-[40ch] text-sm leading-relaxed text-surface-foreground/60">
              Utilizing our proprietary Bio-Link&trade; complex, the serum penetrates the cuticle to
              target oxidative damage caused by thermal stress and environmental pollutants.
            </p>
          </div>
          <div className="relative aspect-[4/5]">
            <img
              src={dropperMacro}
              alt="Macro view of a golden serum drop suspended from a glass dropper"
              loading="lazy"
              width={800}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Composition */}
      <section id="composition" className="bg-white px-8 py-24 text-surface-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-16 md:flex-row">
          <div className="space-y-4 md:sticky md:top-32">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em]">Composition</h3>
            <p className="font-display text-3xl italic">The active elements.</p>
          </div>

          <div className="flex-1 bg-surface">
            {composition.map((item, i) => (
              <div
                key={item.name}
                className={`flex items-center justify-between p-8 transition-colors hover:bg-white ${
                  i < composition.length - 1 ? "border-b border-black/5" : ""
                }`}
              >
                <div>
                  <span className="mb-1 block text-xs font-semibold">{item.name}</span>
                  <span className="text-[11px] uppercase tracking-wider text-surface-foreground/50">
                    {item.role}
                  </span>
                </div>
                <span className="font-mono text-[10px] opacity-40">{item.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acquisition */}
      <section id="acquire" className="relative overflow-hidden bg-background py-32">
        <div className="relative z-10 mx-auto max-w-3xl px-8 text-center">
          <img
            src={serumOverhead}
            alt="Overhead view of the Genesis Serum bottle on a reflective black surface"
            loading="lazy"
            width={816}
            height={816}
            className="mx-auto mb-16 aspect-square w-48 object-cover"
          />
          <h2 className="font-display mb-8 text-4xl italic md:text-5xl">Genesis Serum 50ml</h2>
          <div className="mb-12 flex items-center justify-center gap-6">
            <span className="h-px w-12 bg-foreground/20" />
            <span className="font-mono text-sm tracking-widest text-accent">$185.00</span>
            <span className="h-px w-12 bg-foreground/20" />
          </div>
          <button className="w-full max-w-sm bg-accent py-5 text-[10px] font-medium uppercase tracking-[0.4em] text-accent-foreground transition-colors hover:bg-accent-deep">
            Add to Collection
          </button>
          <p className="mt-8 text-[10px] italic uppercase tracking-widest text-foreground/30">
            Limited monthly batch release
          </p>
        </div>
      </section>

      <footer className="border-t border-border bg-background px-8 py-12 text-foreground/40">
        <div className="flex flex-col items-center justify-between gap-8 text-[10px] font-light uppercase tracking-[0.2em] md:flex-row">
          <div className="flex gap-8">
            <a href="#composition">Inquiry</a>
            <a href="#reconstruction">Sustainability</a>
            <a href="#acquire">Legal</a>
          </div>
          <span>© 2026 LUXÉOL LABORATOIRES</span>
          <div className="flex gap-8">
            <a href="#acquire">Instagram</a>
            <a href="#reconstruction">Journal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
