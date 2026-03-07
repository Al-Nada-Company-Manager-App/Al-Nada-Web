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
  const [errored, setErrored] = useState(false);

  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      setLoaded(true);
      if (onLoad) {
        onLoad(e as React.SyntheticEvent<HTMLImageElement>);
      }
    },
    [onLoad],
  );

  const handleError = useCallback(() => {
    setErrored(true);
    setLoaded(true);
  }, []);

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

      {/* Fallback placeholder for missing images */}
      {errored ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 opacity-40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
          <span className="text-xs font-medium">Photo coming soon</span>
        </div>
      ) : (
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
          onError={handleError}
        />
      )}
    </div>
  );
}
