"use client";

import { ReactNode } from "react";
import { useScrollFade } from "@/hooks/useScrollFade";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 600,
  direction = "up",
  once = false,
}: FadeInProps) {
  const { ref, isInView } = useScrollFade<HTMLDivElement>({
    offset: 20,
    once,
  });

  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return isInView
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0";
      case "down":
        return isInView
          ? "translate-y-0 opacity-100"
          : "-translate-y-6 opacity-0";
      case "left":
        return isInView
          ? "translate-x-0 opacity-100"
          : "translate-x-6 opacity-0";
      case "right":
        return isInView
          ? "translate-x-0 opacity-100"
          : "-translate-x-6 opacity-0";
      case "none":
        return isInView ? "opacity-100" : "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isInView ? `${delay}ms` : "0ms",
      }}
      className={`transition-all ease-out motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${getDirectionClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
