import { useEffect, useRef } from 'react';

interface ScrollFadeOptions {
  threshold?: number;
  rootMargin?: string;
  duration?: number;
  delay?: number;
}

export function useScrollFadeInOut<T extends HTMLElement = HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px',
  duration = 0.8,
  delay = 0
}: ScrollFadeOptions = {}) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial opacity to 0
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}s ease-out ${delay}s`;
    // Hint for browser to optimize opacity transitions
    element.style.willChange = 'opacity';

    // Respect reduced motion preference
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      element.style.transition = 'none';
      element.style.opacity = '1';
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Fade in when entering viewport
            element.style.opacity = '1';
          } else {
            // Fade out when leaving viewport
            element.style.opacity = '0';
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      // Disconnect the observer to avoid errors if the element was removed
      try {
        observer.disconnect();
      } catch (e) {
        // ignore
      }
      // Clean up inline styles we added (optional)
      try {
        element.style.transition = '';
        element.style.willChange = '';
      } catch (e) {
        /* ignore */
      }
    };
  }, [threshold, rootMargin, duration, delay]);

  return elementRef;
}