"use client";

import Image, { type ImageProps } from "next/image";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends ImageProps {
  /** Extra class applied to the wrapper div */
  wrapperClassName?: string;
}

/**
 * Drop-in replacement for next/image with a shimmer skeleton placeholder
 * and a smooth fade-in on load.
 */
export function LazyImage({
  className,
  wrapperClassName,
  alt,
  onLoad,
  fill,
  ...props
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      setLoaded(true);
      if (onLoad) {
        onLoad(e as React.SyntheticEvent<HTMLImageElement>);
      }
    },
    [onLoad],
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        fill && "absolute inset-0",
        wrapperClassName,
      )}
    >
      {/* Shimmer skeleton — visible while image loads */}
      {!loaded && (
        <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />
      )}

      <Image
        {...props}
        alt={alt}
        fill={fill}
        className={cn(
          "transition-opacity duration-500 ease-in-out",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
        onLoad={handleLoad}
      />
    </div>
  );
}
