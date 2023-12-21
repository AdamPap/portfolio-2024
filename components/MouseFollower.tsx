"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseFollower = () => {
  const mouseFollowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(mouseFollowerRef.current, { xPercent: -50, yPercent: -50 });

    document.addEventListener("mousemove", (e) => {
      gsap.to(mouseFollowerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.7,
      });
    });
  }, []);

  return (
    <div
      ref={mouseFollowerRef}
      className="cursor-follower"
    />
  );
};

export default MouseFollower;
