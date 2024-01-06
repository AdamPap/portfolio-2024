"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useCursorSize } from "@/hooks/useCursorSize";

const CustomCursor = () => {
  const { cursorSize } = useCursorSize();

  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(cursorOuterRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorInnerRef.current, { xPercent: -50, yPercent: -50 });

    document.addEventListener("mousemove", (e) => {
      gsap.to(cursorOuterRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
      });

      gsap.to(cursorInnerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    });
  }, []);

  return (
    <>
      <div
        ref={cursorOuterRef}
        className={`cursor-outer cursor-transition ${
          cursorSize === "large" ? "w-24 h-24" : "w-16 h-16"
        }`}
      />
      <div
        ref={cursorInnerRef}
        className="cursor-inner"
      />
    </>
  );
};

export { CustomCursor };
