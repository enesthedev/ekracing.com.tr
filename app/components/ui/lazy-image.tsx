"use client";
import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import { forwardRef, type Ref } from "react";

type LazyImageProps = ImageProps & {
  spinnerSize?: number;
};

const LazyImage = forwardRef<HTMLDivElement, LazyImageProps>(
  ({ spinnerSize = 20, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} className="relative w-full h-full">
        <Image
          {...props}
          className={clsx(props.className, "z-0")}
          loading="lazy"
        />

        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <svg
            className="animate-spin"
            width={spinnerSize}
            height={spinnerSize}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Loading spinner"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        </div>
      </div>
    );
  }
);

LazyImage.displayName = "LazyImage";

export { LazyImage };
