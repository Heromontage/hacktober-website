"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (!("IntersectionObserver" in window)) return;

    const observed = new Set<HTMLElement>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("scroll-reveal-pending");
          entry.target.classList.add("scroll-reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -48px 0px", threshold: 0.01 }
    );

    const observe = (element: HTMLElement) => {
      if (observed.has(element)) return;
      observed.add(element);

      element.classList.add("scroll-reveal-pending");
      observer.observe(element);
    };

    document.querySelectorAll<HTMLElement>("[data-scroll-reveal]").forEach(observe);

    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches("[data-scroll-reveal]")) observe(node);
          node.querySelectorAll<HTMLElement>("[data-scroll-reveal]").forEach(observe);
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      observed.forEach((element) => {
        element.classList.remove("scroll-reveal-pending", "scroll-reveal-visible");
      });
    };
  }, [pathname]);

  return null;
}
