import MouseFollower from "@/components/MouseFollower";
import ProjectImage from "@/components/ProjectImage";
import GridLines from "@/components/GridLines";
import SectionHeadingGrid from "@/components/SectionHeadingGrid";

export default function Home() {
  return (
    <div className="w-full">
      <div className="min-h-screen flex flex-col justify-between pb-5 relative">
        <MouseFollower />
        <GridLines />

        {/* Navbar */}
        <nav className="grid grid-cols-4 py-5 text-[20px]">
          <div className="col-span-1">
            <span>Adam Pap</span>
            <span className="text-crimson">.</span>
          </div>
          <div className="col-span-1">
            Currently available for <br /> full time positions
          </div>
          <div className="col-span-1">hello@adampap.com</div>
          <div className="col-span-1">
            <div className="flex gap-12">
              <a href="/projects">Projects</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Title */}
        <div className="grid grid-cols-4 leading-tight">
          <h1 className="col-span-3 text-[11.5vw] p-0 leading-[0.750] -ml-3 select-none">
            Full Stack
          </h1>
          <div className="col-span-1 col-start-4 self-end text-darkGray font-medium text-[20px]">
            portfolio@2024
          </div>
          <h1 className="col-span-full justify-self-end text-[11.5vw] p-0 select-none">
            Web Developer
          </h1>
        </div>

        {/* Hero Text */}
        <div className="grid grid-cols-4">
          <div className="col-span-1 col-start-1 self-end text-darkGray font-medium text-[20px]">{`(scroll)`}</div>
          <div className="col-span-2 col-start-3 p-0 max-w-xl">
            Hello, I am <span className="underline">Adam</span>. Welcome to my
            personal portfolio, where I showcase my passion for creating
            exceptional web experiences.
          </div>
        </div>
      </div>

      <SectionHeadingGrid
        bigHeading="Works"
        smallHeading={
          <span>
          Recent <br /> projects
          </span>
        }
        supportingText={
          <span>
            001/ <br /> 004
          </span>
        }
      />

      <div className="flex flex-wrap justify-between projects-container">
        {[1, 2, 3, 4].map((_, index) => (
          <ProjectImage key={index} />
        ))}
      </div>

      <div className="h-screen bg-black mt-40"></div>
    </div>
  );
}
