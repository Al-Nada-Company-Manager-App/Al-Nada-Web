"use client";

import type { ComponentPropsWithoutRef } from "react";
import React from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      dir="ltr"
      style={{ direction: "ltr" }}
      className={cn("group overflow-hidden", className)}
    >
      {/* Single animated track containing two copies */}
      <div
        className={cn(
          "flex w-max",
          vertical ? "flex-col animate-marquee-vertical" : "flex-row animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
        )}
        style={{ gap: "var(--gap, 1rem)" }}
      >
        {/* Copy 1 */}
        <div className={cn("flex shrink-0", vertical ? "flex-col" : "flex-row")} style={{ gap: "var(--gap, 1rem)" }}>
          {children}
        </div>
        {/* Copy 2 (duplicate for seamless loop) */}
        <div className={cn("flex shrink-0", vertical ? "flex-col" : "flex-row")} style={{ gap: "var(--gap, 1rem)" }} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
