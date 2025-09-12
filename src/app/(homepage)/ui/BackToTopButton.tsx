"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function BackToTopButton({ className }: { className: string }) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ transform: "translateY(60px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          exit={{ transform: "translateY(60px)", opacity: 0  }}
          whileHover={{paddingTop: "40px", transition: {duration: 0.05}}}
          onClick={scrollToTop}
          className={`group fixed bottom-12 right-12 py-[10px] px-[10px] focus:pt-[40px] rounded-full cursor-pointer transition-all duration-300 ${className} z-40`}
        >
          <ArrowUp className="group-focus:-translate-y-8 duration-250"/>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
