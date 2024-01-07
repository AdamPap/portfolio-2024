import Project from "@/components/project/Project";
import React from "react";
import project1 from "@/public/images/project-1.jpg";
import project2 from "@/public/images/project-2.jpg";
import project3 from "@/public/images/project-3.jpg";
import project4 from "@/public/images/project-4.jpg";

const projects = [
  {
    title: "Project 1",
    description: "This is a description for project 1",
    image: project1,
    link: "https://google.com",
  },
  {
    title: "Project 2",
    description: "This is a description for project 2",
    image: project2,
    link: "https://google.com",
  },
  {
    title: "Project 3",
    description: "This is a description for project 3",
    image: project3,
    link: "https://google.com",
  },
  {
    title: "Project 4",
    description: "This is a description for project 4",
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
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectList;
