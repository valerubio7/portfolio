"use client";

import { useEffect, useRef } from "react";

interface UseScrollAnimationOptions {
  /** Percentage of element visible before triggering (0-1) */
  threshold?: number;
  /** CSS margin around the root (e.g., "-100px") */
  rootMargin?: string;
  /** Only trigger once (default: true) */
  once?: boolean;
}

/**
 * Hook that observes elements with the `.animate-on-scroll` class
 * and adds `.is-visible` when they enter the viewport.
 *
 * Usage:
 *   const sectionRef = useScrollAnimation();
 *   <section ref={sectionRef}>
 *     <div className="animate-on-scroll">Fades in on scroll</div>
 *   </section>
 */
export function useScrollAnimation({
  threshold = 0,
  rootMargin = "0px 0px 0px 0px",
  once = true,
}: UseScrollAnimationOptions = {}) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".animate-on-scroll");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return containerRef;
}
