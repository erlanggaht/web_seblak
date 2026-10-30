"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollFadeOptions {
  threshold?: number;
  offset?: number;
  once?: boolean;
}

export function useScrollFade<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollFadeOptions = {},
) {
  const { threshold = 0, offset = 20, once = false } = options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const checkVisibility = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Terlihat jika berada di dalam viewport (bahkan jika baru menyentuh batas layar)
      const isVisible = rect.top < windowHeight && rect.bottom > 0;

      if (isVisible) {
        setIsInView(true);
      } else if (!once) {
        // Reset hanya jika elemen sudah keluar dari viewport
        const isOffscreen = rect.top >= windowHeight || rect.bottom <= 0;
        if (isOffscreen) {
          setIsInView(false);
        }
      }
    };

    // 1. Cek langsung saat mount & frame animasi pertama
    checkVisibility();
    const rafId = requestAnimationFrame(checkVisibility);

    // 2. Interval periodik selama 4 detik awal untuk menangani scroll restoration browser di dev mode
    const intervalId = setInterval(checkVisibility, 150);
    const stopIntervalTimer = setTimeout(() => {
      clearInterval(intervalId);
    }, 4000);

    // 3. Listener scroll & resize di window dan document
    window.addEventListener("scroll", checkVisibility, { passive: true });
    document.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility, { passive: true });
    window.addEventListener("focus", checkVisibility);
    document.addEventListener("visibilitychange", checkVisibility);

    // 4. ResizeObserver pada body untuk memantau perubahan layout/konten saat reload
    let resizeObserver: ResizeObserver | null = null;
    if ("ResizeObserver" in window && document.body) {
      resizeObserver = new ResizeObserver(checkVisibility);
      resizeObserver.observe(document.body);
    }

    // 5. Native IntersectionObserver
    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setIsInView(true);
              if (once) {
                observer?.unobserve(element);
              }
            } else if (!once) {
              checkVisibility();
            }
          }
        },
        {
          threshold,
          rootMargin: `${offset}px 0px ${offset}px 0px`,
        },
      );
      observer.observe(element);
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(intervalId);
      clearTimeout(stopIntervalTimer);
      window.removeEventListener("scroll", checkVisibility);
      document.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
      window.removeEventListener("focus", checkVisibility);
      document.removeEventListener("visibilitychange", checkVisibility);
      resizeObserver?.disconnect();
      observer?.disconnect();
    };
  }, [threshold, offset, once]);

  return { ref, isInView };
}

export const useInView = useScrollFade;
