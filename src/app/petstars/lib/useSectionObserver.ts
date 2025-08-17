import { useCallback, useEffect, useRef } from "react";

export function useSectionObserver() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            section
              .querySelectorAll(".reveal")
              .forEach((el) => el.classList.add("is-visible"));
          }
          const bg = section.dataset.bg;
          let bgImage = document.getElementById(
            "bg-image"
          ) as HTMLDivElement | null;

          if (!bgImage) {
            bgImage = document.createElement("div");
            bgImage.id = "bg-image";
            bgImage.className =
              "fixed inset-0 -z-10 pointer-events-none opacity-0 transition-opacity duration-700 bg-center bg-cover";
            document.body.prepend(bgImage);
          }

          if (bg) {
            if (bg[0] === "#") {
              bgImage.style.opacity = "0";
              document.documentElement.style.setProperty("--page-bg", bg);
            } else {
              bgImage.style.backgroundImage = bg;
              bgImage.style.opacity = "1";
            }
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px" }
    );
  }, []);

  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    return observerRef.current?.observe(node);
  }, []);

  return ref;
}
