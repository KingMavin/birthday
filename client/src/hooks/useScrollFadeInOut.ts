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
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, duration, delay]);

  return elementRef;
}