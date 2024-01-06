import { CustomCursor } from "@/components/CustomCursor";
import ProjectImage from "@/components/ProjectImage";
import GridLines from "@/components/GridLines";
import Navbar from "@/components/Navbar";
import SectionHeadingGrid from "@/components/SectionHeadingGrid";
import HeroContent from "@/components/HeroContent";

export default function Home() {
  return (
    <div className="w-full">
      <div className="min-h-screen flex flex-col justify-between pb-5 relative">
        <CustomCursor />
        <GridLines />

        <Navbar />

        <HeroContent />
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
