"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  index: number;
}

const ProjectImageParallax: React.FC<Props> = ({ image, index }) => {
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
    // The cropped container with overflow hidden.
    <div className={`image-container`}>
      {/* 
          The big image container which will 
          allow the parallax to work. This would be
          the image if next image component didn't 
          need this fix.
      */}
      <div
        className="relative"
        ref={imageContainerRef}
      >
        {/* 
            This is to allow next image have fill
            property to simulate bg-image: cover.
            The image takes the size of the parent. 
            Next Image component requires relative 
            parent.
        */}
        <div className="next-image-container">
          <Image
            alt="Project Image"
            src={image}
            fill
            quality={100}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectImageParallax;
