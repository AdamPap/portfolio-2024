import ProjectImage from "@/components/ProjectImageParallax";
import { StaticImageData } from "next/image";
import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  index: number;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  link,
  index,
}) => {
  return (
    // This container's width should be adjusted
    // for each project.
    <div
      className={`flex flex-col  
      ${index === 0 && "w-1/2"}  
      ${index === 1 && "w-[40%] mt-52"}
      ${index === 2 && "w-[35%] mt-16"}
      ${index === 3 && "w-[50%] mt-52"}
      `}
    >
      <ProjectImage
        index={index}
        image={image}
      />
      <div>{title}</div>
    </div>
  );
};

export default Project;