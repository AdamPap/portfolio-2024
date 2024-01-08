import { CustomCursor } from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import GridLines from "@/components/GridLines";
import HeroContent from "@/components/HeroContent";
import Navbar from "@/components/Navbar";
import ProjectList from "@/components/project/ProjectList";
import SectionHeadingGrid from "@/components/SectionHeadingGrid";

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

      <ProjectList />

      <div className="h-screen bg-slate-800 my-40"></div>

      <Footer />
    </div>
  );
}
