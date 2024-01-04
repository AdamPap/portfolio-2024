"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectImage = () => {
  const imageContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!imageContainerRef.current || !imageContainerRef.current.parentElement)
      return;

    const heightDiff =
      imageContainerRef.current?.offsetHeight -
      imageContainerRef.current?.parentElement?.offsetHeight;

    gsap.fromTo(
      imageContainerRef.current,
      {
        y: -heightDiff,
      },
      {
        scrollTrigger: {
          trigger: imageContainerRef.current.parentElement,
          start: "top 85%",
          end: "bottom 15%",
          scrub: true,
          markers: true,
        },
        ease: "none",
        y: 0,
      }
    );
  }, []);

  return (
    <div className="image-container">
      <div
        ref={imageContainerRef}
        className="image-parallax"
      ></div>
    </div>
  );
};

export default ProjectImage;
