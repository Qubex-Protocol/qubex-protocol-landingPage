import { PropsWithChildren } from "react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type Direction = "up" | "down" | "left" | "right" | "none";

export type RevealProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  direction?: Direction;
  /** if true, element starts hidden (opacity-0 + translate) */
  initialHidden?: boolean;
  /** threshold/rootMargin/once forwarded to hook */
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
}>;

export const Reveal = ({
  as = "div",
  className,
  delayMs = 0,
  durationMs = 600,
  direction = "up",
  initialHidden = true,
  threshold,
  rootMargin,
  once,
  children,
}: RevealProps) => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold, rootMargin, once });

  const Tag = as as any;

  const axisClass = (() => {
    switch (direction) {
      case "up":
        return "translate-y-6";
      case "down":
        return "-translate-y-6";
      case "left":
        return "translate-x-6";
      case "right":
        return "-translate-x-6";
      default:
        return "";
    }
  })();

  const style: CSSProperties = {
    transitionDuration: `${durationMs}ms`,
    transitionDelay: `${delayMs}ms`,
  };

  return (
    <Tag
      ref={ref}
      style={style}
      className={cn(
        "will-change-transform opacity-100 transform transition-all ease-out",
        initialHidden && !inView && "opacity-0",
        initialHidden && !inView && axisClass,
        inView && "opacity-100 translate-x-0 translate-y-0",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;


