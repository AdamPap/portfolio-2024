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
    </div>
  );
}
