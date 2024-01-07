"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  projectIndex: number;
}

const ProjectImageParallax: React.FC<Props> = ({ projectIndex }) => {
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
        className={`image-parallax bg-[url('/images/project-${projectIndex}.jpg')]`}
      ></div>
    </div>
  );
};

export default ProjectImageParallax;
