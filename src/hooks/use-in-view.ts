import { useEffect, useRef, useState, RefObject } from "react";

export type UseInViewOptions = {
  /** Threshold for IntersectionObserver (0..1) */
  threshold?: number | number[];
  /** Root margin for IntersectionObserver (CSS margin string) */
  rootMargin?: string;
  /** If true, once visible it will stay visible */
  once?: boolean;
};

export function useInView<T extends HTMLElement>(
  options: UseInViewOptions = {}
): [RefObject<T>, boolean] {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -10% 0px",
    once = true,
  } = options;

  const elementRef = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [elementRef, inView];
}

export default useInView;


