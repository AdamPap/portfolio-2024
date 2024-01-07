import ProjectImage from "@/components/project/ProjectImageParallax";
import { StaticImageData } from "next/image";
import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  image: StaticImageData;
  techStack: string[];
  link: string;
  index: number;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  techStack,
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
      <div className="text-[32px] mt-10 font-bold">{title}</div>
      <div className="flex text-darkGray mt-1">
        {techStack.map((tech, index) => (
          <div
            key={tech}
            className="text-[26px] font-normal"
          >
            {tech}
            {index !== techStack.length - 1 && <span className="mx-3">⋅</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
