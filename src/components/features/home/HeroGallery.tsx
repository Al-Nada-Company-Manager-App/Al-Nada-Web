"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SLIDE_DURATION = 4000; // ms per slide

const SLIDES = [
  { src: "/img/Index/I1.jpg",  alt: "Fieldwork",  label: "Field Operations" },
  { src: "/img/Index/I6.jpg",  alt: "Fieldwork",  label: "Field Operations" },
  { src: "/img/Index/I2.jpg",  alt: "Lab Work",   label: "Lab Precision"    },
  { src: "/img/Index/I8.jpg",  alt: "Equipment",  label: "Instruments"      },
  { src: "/img/Index/I12.jpg", alt: "Device",     label: "Our Devices"      },
  { src: "/img/Index/I14.jpg", alt: "Device",     label: "Our Devices"      },
];

interface HeroGalleryProps {
  isDark: boolean;
}

export function HeroGallery({ isDark }: HeroGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress]       = useState(0);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const slideRef    = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return;
      setIsAnimating(true);
      setPrev(current);
      setCurrent(index);
      setProgress(0);
      setTimeout(() => {
        setPrev(null);
        setIsAnimating(false);
      }, 700);
    },
    [current, isAnimating],
  );

  const advance = useCallback(() => {
    setCurrent((c) => {
      const next = (c + 1) % SLIDES.length;
      setPrev(c);
      setIsAnimating(true);
      setProgress(0);
      setTimeout(() => {
        setPrev(null);
        setIsAnimating(false);
      }, 700);
      return next;
    });
  }, []);

  // Progress ticker
  useEffect(() => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);
    const step = 100 / (SLIDE_DURATION / 50);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 50);
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [current]);

  // Auto-advance
  useEffect(() => {
    if (slideRef.current) clearTimeout(slideRef.current);
    slideRef.current = setTimeout(advance, SLIDE_DURATION);
    return () => {
      if (slideRef.current) clearTimeout(slideRef.current);
    };
  }, [current, advance]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      {/* ── Slide layers ───────────────────────────────────────────── */}

      {/* Outgoing slide (fades + subtle scale-down) */}
      {prev !== null && (
        <div
          key={`prev-${prev}`}
          className="absolute inset-0 z-10"
          style={{ animation: "hero-slide-out 700ms ease-in-out forwards" }}
        >
          <Image
            src={SLIDES[prev].src}
            alt={SLIDES[prev].alt}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 45vw, 560px"
          />
        </div>
      )}

      {/* Current slide (Ken Burns zoom-in + fade) */}
      <div
        key={`slide-${current}`}
        className="absolute inset-0 z-20"
        style={{ animation: "hero-slide-in 700ms ease-out forwards" }}
      >
        <Image
          src={SLIDES[current].src}
          alt={SLIDES[current].alt}
          fill
          className="object-cover"
          style={{ animation: "hero-ken-burns 4000ms ease-out forwards" }}
          priority={current === 0}
          sizes="(max-width: 1280px) 45vw, 560px"
        />
      </div>

      {/* ── Gradient overlays ──────────────────────────────────────── */}
      <div
        className={cn(
          "absolute inset-0 z-30 pointer-events-none",
          isDark
            ? "bg-gradient-to-t from-[#060f2e]/80 via-[#060f2e]/20 to-transparent"
            : "bg-gradient-to-t from-[#0a1a4f]/50 via-transparent to-transparent",
        )}
      />
      {/* Left-edge vignette for blending with the text card */}
      <div
        className={cn(
          "absolute inset-y-0 left-0 w-16 z-30 pointer-events-none",
          isDark
            ? "bg-gradient-to-r from-[#060f2e]/60 to-transparent"
            : "bg-gradient-to-r from-white/30 to-transparent",
        )}
      />

      {/* ── Progress bar ───────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-40 bg-white/10">
        <div
          className="h-full bg-primary transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ── Slide label badge ──────────────────────────────────────── */}
      <div className="absolute top-5 right-5 z-40">
        <span
          className={cn(
            "px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md border",
            isDark
              ? "bg-white/10 text-white/70 border-white/15"
              : "bg-white/60 text-[#0a1a4f]/70 border-white/40",
          )}
        >
          {SLIDES[current].label}
        </span>
      </div>

      {/* ── Thumbnail strip ────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-40 px-4 pb-4">
        {/* Frosted glass strip */}
        <div
          className={cn(
            "flex gap-2 p-2 rounded-2xl backdrop-blur-md border",
            isDark
              ? "bg-black/30 border-white/10"
              : "bg-white/40 border-white/60",
          )}
        >
          {SLIDES.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={cn(
                "relative flex-1 h-12 rounded-xl overflow-hidden transition-all duration-300 focus:outline-none",
                i === current
                  ? "ring-2 ring-primary ring-offset-1 ring-offset-transparent scale-[1.04]"
                  : "opacity-50 hover:opacity-80 hover:scale-[1.02]",
              )}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="80px"
              />
              {/* Active glow */}
              {i === current && (
                <div className="absolute inset-0 bg-primary/20" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Keyframe styles (injected once) ────────────────────────── */}
      <style>{`
        @keyframes hero-slide-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes hero-slide-out {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes hero-ken-burns {
          from { transform: scale(1.08); }
          to   { transform: scale(1.00); }
        }
      `}</style>
    </div>
  );
}
