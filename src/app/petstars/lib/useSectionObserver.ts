import { useCallback, useEffect, useRef } from "react";

export function useSectionObserver() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pendingNodeRef = useRef<HTMLElement | null>(null);
  const bgImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let el = document.getElementById("bg-image") as HTMLDivElement | null;
    if (!el) {
      el = document.createElement("div");
      el.id = "bg-image";
      el.className =
        "fixed inset-0 -z-10 pointer-events-none opacity-0 transition-opacity duration-700 bg-center bg-cover";
      document.body.prepend(el);
    }
    bgImageRef.current = el;
  }, []);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const bgImage = bgImageRef.current;

    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const section = entry.target as HTMLElement;
      if (section.id === "heroSection") {
        document.getElementById("logo")!.classList.add("opacity-0");
      } else {
        document.getElementById("logo")!.classList.add("opacity-100");
      }

      section
        .querySelectorAll(".reveal, .revealx")
        .forEach((el) => el.classList.add("is-visible"));

      const bg = section.dataset.bg;
      if (!bg) return;

      if (bg.startsWith("#")) {
        if (bgImage) bgImage.style.opacity = "0";
        document.documentElement.style.setProperty("--page-bg", bg);
      } else {
        const cssBg = bg.startsWith("url(") ? bg : `url("${bg}")`;
        if (bgImage) {
          bgImage.style.backgroundImage = cssBg;
          bgImage.style.opacity = "1";
        }
      }
    });
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(callback, {
      root: null,
      threshold: 0.1,
      
    });

    if (pendingNodeRef.current) {
      observerRef.current.observe(pendingNodeRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [callback]);

  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    if (observerRef.current) {
      observerRef.current.observe(node);
    } else {
      pendingNodeRef.current = node;
    }
  }, []);

  return ref;
}
