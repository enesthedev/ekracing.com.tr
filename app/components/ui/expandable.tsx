"use client";

import { HTMLAttributes, useEffect, useRef, useState } from "react";

import { cn } from "@/app/utils";
import LazyImage from "./lazy-image";
import { TextAnimate } from "./text-animate";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: { image: string; title: string };
  index: number;
  activeItem: number;
}

interface ExpandableProps {
  list?: { image: string; title: string }[];
  autoPlay?: boolean;
  className?: string;
}

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-20 min-w-10 cursor-pointer overflow-hidden transition-all delay-0 duration-300 ease-in-out",
        {
          "flex-grow": index === activeItem,
        },
        className
      )}
      {...props}
    >
      <LazyImage
        src={item.image}
        fill
        alt={item.title}
        className={cn(
          "h-full w-full object-cover hover:grayscale-0",
          index == activeItem ? "grayscale-0" : "grayscale-90"
        )}
      />
      {index === activeItem && (
        <div className="absolute min-w-fit flex items-end p-5 w-full h-full bg-black/10">
          <TextAnimate
            className="items-start font-bold justify-start text-xl sm:text-2xl md:text-3xl"
            animation="fadeIn"
            by="text"
            as={"h2"}
            startOnView={false}
          >
            {item.title}
          </TextAnimate>
        </div>
      )}
    </div>
  );
};

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1541753236788-b0ac1fc5009d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Mountains",
  },
  {
    image:
      "https://images.unsplash.com/photo-1718027808460-7069cf0ca9ae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Great Wall of China",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584968173934-bc0b588eb806?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Texture & Patterns",
  },
];

export default function Expandable({
  list = items,
  autoPlay = true,
  className,
}: ExpandableProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

  // Ref to hold the interval ID for stepping through items
  const changeRef = useRef<NodeJS.Timeout | null>(null);

  // Animate activeItem from current to target by incrementing/decrementing stepwise
  const changeActiveItem = (targetIndex: number) => {
    // Clear any existing interval
    if (changeRef.current) {
      clearInterval(changeRef.current);
    }
    changeRef.current = setInterval(() => {
      setActiveItem((prev) => {
        if (prev === targetIndex) {
          if (changeRef.current) {
            clearInterval(changeRef.current);
          }
          return prev;
        }
        return prev < targetIndex ? prev + 1 : prev - 1;
      });
    }, 300); // change step every 300ms, adjust as needed
  };

  return (
    <div className={cn("flex h-96 w-full gap-1", className)}>
      {list.map((item, index) => (
        <List
          key={item.title}
          item={item}
          index={index}
          activeItem={activeItem}
          onMouseEnter={() => {
            changeActiveItem(index);
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        />
      ))}
    </div>
  );
}
