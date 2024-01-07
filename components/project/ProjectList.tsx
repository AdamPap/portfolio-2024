import Project from "@/components/project/Project";
import React from "react";
import project1 from "@/public/images/project-1.jpg";
import project2 from "@/public/images/project-2.jpg";
import project3 from "@/public/images/project-3.jpg";
import project4 from "@/public/images/project-4.jpg";

const projects = [
  {
    title: "Celer Sight AI",
    description: "This is a description for project 1",
    techStack: ["Next.js", "Express.js", "MongoDB", "TypeScript"],
    image: project1,
    link: "https://google.com",
  },
  {
    title: "Olive Mill Manager",
    description: "This is a description for project 2",
    techStack: ["React Native", "Expo", "TypeScript"],
    image: project2,
    link: "https://google.com",
  },
  {
    title: "Nektaryus",
    description: "This is a description for project 3",
    techStack: ["Wordpress"],
    image: project3,
    link: "https://google.com",
  },
  {
    title: "Next Journey",
    description: "This is a description for project 4",
    techStack: ["Next.js", "PostgreSQL", "GraphQL", "TypeScript"],
    image: project4,
    link: "https://google.com",
  },
];

const ProjectList = () => {
  return (
    <div className="w-full flex justify-between flex-wrap">
      {projects.map((project, index) => (
        <Project
          index={index}
          key={project.title}
          image={project.image}
          title={project.title}
          techStack={project.techStack}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectList;
