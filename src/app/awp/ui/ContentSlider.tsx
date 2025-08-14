"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { sora } from "../lib/fonts";

export interface Slide {
  id?: string | number;
  title: string;
  subtitle?: string;
  bg: string;
  isVideo?: boolean;
}

interface ContentSliderProps {
  slides: Slide[];
  startIndex?: number;
  autoplay?: boolean;
  interval?: number;
  className?: string;
}

export default function ContentSlider({
  slides = [],
  startIndex = 0,
  autoplay = false,
  interval = 6000,
  className = "",
}: ContentSliderProps) {
  const count = slides.length;

  const extendedSlides = useMemo<Slide[]>(() => {
    if (count <= 1) return slides;
    return [slides[count - 1], ...slides, slides[0]];
  }, [slides, count]);
  const extendedCount = extendedSlides.length || 1;

  const [index, setIndex] = useState<number>(
    Math.min(Math.max(startIndex, 0), Math.max(count - 1, 0)) +
      (count > 1 ? 1 : 0)
  );
  const [transitionEnabled, setTransitionEnabled] = useState<boolean>(true);

  const containerRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setIndex((i) => Math.min(i + 1, extendedCount - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const goToReal = (realIdx: number) =>
    setIndex(count > 1 ? realIdx + 1 : realIdx);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [extendedCount]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || count <= 1) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => next(), interval);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [index, autoplay, interval, count]);

  const onTransitionEnd = () => {
    if (count <= 1) return;
    if (index === extendedCount - 1) {
      setTransitionEnabled(false);
      setIndex(1);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setTransitionEnabled(true))
      );
    } else if (index === 0) {
      setTransitionEnabled(false);
      setIndex(count);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setTransitionEnabled(true))
      );
    }
  };

  const touch = useRef<{ x: number; y: number; t: number; moved: boolean }>({
    x: 0,
    y: 0,
    t: 0,
    moved: false,
  });
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY, t: Date.now(), moved: false };
  };
  const onTouchMove = (e: React.TouchEvent) => {
    const dx = e.touches[0].clientX - touch.current.x;
    if (Math.abs(dx) > 10) touch.current.moved = true;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = (e.changedTouches?.[0]?.clientX ?? 0) - touch.current.x;
    const dt = Date.now() - touch.current.t;
    const threshold = 50;
    const fast = dt < 400 && Math.abs(dx) > 25;
    if (Math.abs(dx) > threshold || fast) {
      if (dx < 0) next();
      else prev();
    }
  };

  const trackStyle = useMemo<React.CSSProperties>(
    () => ({
      width: `${extendedCount * 100}%`,
      transform: `translateX(-${(100 / extendedCount) * index}%)`,
      transition: transitionEnabled ? "transform 650ms ease" : "none",
    }),
    [index, extendedCount, transitionEnabled]
  );

  const activeDot = count > 1 ? (index - 1 + count) % count : index;

  return (
    <section
      ref={containerRef as React.MutableRefObject<HTMLElement>}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Content slider"
      className={`relative mx-auto overflow-hidden ${className}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        ref={trackRef}
        className="flex"
        style={trackStyle}
        onTransitionEnd={onTransitionEnd}
      >
        {extendedSlides.map((s, i) => {
          return (
            <article
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${extendedCount}`}
              className="relative shrink-0 h-[56vh] sm:h-[64vh] md:h-[72vh]"
              style={{ width: `${100 / extendedCount}%` }}
            >
              {s.isVideo ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="auto"
                  aria-hidden="true"
                >
                  <source src="/awp/awp-green-nature.mp4" type="video/mp4" />
                </video>
              ) : (
                <>
                  <Image
                    src={s.bg}
                    alt=""
                    width={1600}
                    height={600}
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </>
              )}

              <div className="relative z-10 h-full w-full grid place-items-center text-center text-white px-6">
                <div className="max-w-5xl">
                  <h2
                    className={`${sora.className} antialiased text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight`}
                  >
                    {s.title}
                  </h2>
                  {s.subtitle && (
                    <p className="mt-4 text-xl sm:text-2xl opacity-95">
                      {s.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {count > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white w-10 h-10 grid place-items-center shadow"
          >
            <span className="sr-only">Previous</span>
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M15 18l-6-6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white w-10 h-10 grid place-items-center shadow"
          >
            <span className="sr-only">Next</span>
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M9 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots (real slides) */}
      {count > 1 && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToReal(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${
                i === activeDot ? "bg-white" : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
