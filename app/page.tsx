import MouseFollower from "../components/MouseFollower";

export default function Home() {
  return (
    <div className="w-full">
      <div className=" min-h-screen flex flex-col justify-between relative pb-5">
        <MouseFollower />

        {/* Grid lines */}
        <div className="grid grid-cols-4 h-screen w-full absolute -z-[200] top-0 left-0 pointer-events-none">
          <div className="col-span-1 border-r-[1px] border-l-[1px] border-gridLines" />
          <div className="col-span-1 border-r-[1px] border-gridLines" />
          <div className="col-span-1 border-r-[1px] border-gridLines" />
          <div className="col-span-1 border-r-[1px] border-gridLines" />
        </div>

        {/* Navbar */}
        <nav className="grid grid-cols-4 py-5 text-[20px]">
          <div className="col-span-1">Adam Pap.</div>
          <div className="col-span-1">
            Currently available for <br /> full time positions
          </div>
          <div className="col-span-1">hello@adampap.com</div>
          <div className="col-span-1">
            <div className="flex gap-14">
              <a href="/projects">Projects</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Title */}
        <div className="grid grid-cols-4 leading-tight">
          <h1 className="col-span-3 text-[11.5vw] p-0 leading-[0.750] -ml-3">
            Full Stack
          </h1>
          <div className="col-span-1 col-start-4 self-end text-darkGray font-medium text-[20px]">
            portfolio@2024
          </div>
          <h1 className="col-span-full justify-self-end text-[11.5vw] p-0">
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

      <div className="h-screen bg-black"></div>
    </div>
  );
}
