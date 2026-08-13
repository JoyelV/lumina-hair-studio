import { useEffect, useRef } from "react";

import heroSerum from "@/assets/hero-serum.jpg";

/**
 * Cinematic hero.
 *
 * Depth stack (back -> front):
 *   0. obsidian base + ambient key-light bloom
 *   1. product plate (pointer parallax, slow light drift)
 *   2. directional scrim (desktop: left-to-right, mobile: bottom-up)
 *   3. floor falloff + film grain
 *   4. typography, CTAs, editorial metadata
 */
export function Hero() {
  const plateRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const plate = plateRef.current;
    const copy = copyRef.current;
    if (!plate || !copy) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    // Target + current values, critically damped toward the pointer.
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const tick = () => {
      cx += (tx - cx) * 0.045;
      cy += (ty - cy) * 0.045;
      plate.style.transform = `translate3d(${(-cx * 18).toFixed(2)}px, ${(-cy * 12).toFixed(2)}px, 0)`;
      copy.style.transform = `translate3d(${(cx * 6).toFixed(2)}px, ${(cy * 4).toFixed(2)}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-background md:justify-center">
      {/* 0 — ambient key light */}
      <div
        aria-hidden
        className="absolute -top-1/4 right-[-10%] -z-10 h-[120vh] w-[80vw] rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-accent) 22%, transparent) 0%, transparent 65%)",
        }}
      />

      {/* 1 — product plate */}
      <div ref={plateRef} className="absolute inset-0 -z-10 will-change-transform">
        <div className="animate-light h-full w-full">
          <img
            src={heroSerum}
            alt="The LUXÉOL Genesis Serum in dark smoked glass, lit by a soft studio key light"
            width={1920}
            height={1088}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full scale-125 object-cover object-[62%_center] md:translate-x-[16%] md:object-center"
          />
        </div>
      </div>

      {/* 2 — directional scrim */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(10,10,10,0.97)_18%,rgba(10,10,10,0.72)_46%,rgba(10,10,10,0.1)_78%)] md:bg-[linear-gradient(to_right,rgba(10,10,10,0.96)_0%,rgba(10,10,10,0.86)_30%,rgba(10,10,10,0.28)_56%,transparent_76%)]"
      />

      {/* 3 — floor falloff + grain */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(to_top,var(--color-background),transparent)]"
      />
      <div aria-hidden className="grain-overlay pointer-events-none absolute inset-0 -z-10 opacity-[0.055]" />

      {/* 4 — typography */}
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-28 pt-40 sm:px-10 md:px-16 md:pb-0 md:pt-0">
        <div ref={copyRef} className="max-w-[34rem] will-change-transform">
          <p
            className="animate-fade-slow font-mono text-[10px] uppercase tracking-[0.45em] text-accent"
            style={{ animationDelay: "120ms" }}
          >
            Molecular Repair — Series 01
          </p>

          <h1
            className="animate-reveal mt-6 font-display text-[clamp(3.25rem,11vw,8.5rem)] font-light italic leading-[0.92] tracking-[-0.02em] text-balance"
            style={{ animationDelay: "220ms" }}
          >
            The Genesis
            <br className="hidden sm:block" /> Serum
          </h1>

          <div
            className="animate-rule mt-8 h-px w-24 bg-accent/50"
            style={{ animationDelay: "620ms" }}
          />

          <p
            className="animate-reveal mt-8 max-w-[40ch] text-[0.95rem] font-light leading-relaxed text-foreground/60 text-pretty md:text-base"
            style={{ animationDelay: "720ms" }}
          >
            A biological intervention for cellular hair restoration. Engineered to reconstruct
            disulfide bonds at the cortex level.
          </p>

          {/* CTA hierarchy: one primary, one quiet secondary */}
          <div
            className="animate-reveal mt-12 flex flex-col items-stretch gap-5 sm:flex-row sm:items-center"
            style={{ animationDelay: "880ms" }}
          >
            <a
              href="#acquire"
              className="group relative inline-flex items-center justify-center overflow-hidden border border-accent/70 px-10 py-4 text-[10px] uppercase tracking-[0.32em] text-accent transition-colors duration-700 ease-[var(--ease-out-expo)] hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-accent transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-y-100" />
              Secure Allocation
            </a>

            <a
              href="#reconstruction"
              className="inline-flex items-center justify-center gap-3 py-2 text-[10px] uppercase tracking-[0.32em] text-foreground/50 transition-colors duration-500 hover:text-foreground sm:justify-start sm:px-2"
            >
              The Science
              <span aria-hidden className="h-px w-6 bg-current" />
            </a>
          </div>
        </div>
      </div>

      {/* editorial metadata rail */}
      <div
        className="animate-fade-slow pointer-events-none absolute bottom-8 right-6 hidden text-right font-mono text-[9px] uppercase leading-relaxed tracking-[0.3em] text-foreground/30 md:block md:right-16"
        style={{ animationDelay: "1200ms" }}
      >
        50 ml · 1.69 fl.oz
        <br />
        Batch N° 0001 — Paris
      </div>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden h-14 w-px -translate-x-1/2 overflow-hidden bg-foreground/10 md:block"
      >
        <span className="animate-scroll-pulse block h-full w-full bg-accent/60" />
      </div>
    </section>
  );
}
