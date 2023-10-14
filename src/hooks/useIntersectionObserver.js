import { useEffect } from "react";

export default function useIntersectionObserver(ref, callback, options) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      callback(entries[0]);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, callback, options]);
}
