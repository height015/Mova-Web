"use client";

import { useEffect, useRef, useState } from "react";
import { cx } from "@/lib/utils";

export function ViewportStage({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const target = node.firstElementChild ?? node;
    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true);
        observer.disconnect();
      }
    }, { threshold: 0.22 });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={cx("viewport-stage", active && "is-active", className)}>{children}</div>;
}
