import MouseFollower from "../components/MouseFollower";

export default function Home() {
  return (
    <div className="w-full min-h-screen relative">
      <MouseFollower />
      {/* Grid lines */}
      <div className="grid grid-cols-4 h-screen w-full absolute -z-10 top-0 left-0 pointer-events-none">
        <div className="col-span-1 border-r-[1px] border-l-[1px] border-gridLines" />
        <div className="col-span-1 border-r-[1px] border-gridLines" />
        <div className="col-span-1 border-r-[1px] border-gridLines" />
        <div className="col-span-1 border-r-[1px] border-gridLines" />
      </div>

      {/* Navbar */}
      <nav className="grid grid-cols-4 py-6 text-[20px]">
        <div className="col-span-1">Adam Pap.</div>
        <div className="col-span-1">
          Currently available for <br /> full time positions
        </div>
        <div className="col-span-1">hello@adampap.com</div>
        <div className="col-span-1">
          <div className="flex gap-10">
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Title */}
      <div className="grid grid-cols-4 leading-tight mt-24">
        <div className="col-span-3 text-[11.5vw] p-0 ">Full Stack</div>
        <div className="col-span-1 col-start-4 self-end text-darkGray font-medium text-[20px]">
          portfolio@2024
        </div>
        <div className="col-span-full justify-self-end text-[11.5vw] p-0">
          Web Developer
        </div>
      </div>

    </div>
  );
}
