import React from "react";

const GridLines = () => {
  return (
    <div className="grid grid-cols-4 min-h-screen w-full fixed px-6 -z-[200] top-0 left-0 pointer-events-none">
      <div className="col-span-1 border-r-[1px] border-l-[1px] border-gridLines" />
      <div className="col-span-1 border-r-[1px] border-gridLines" />
      <div className="col-span-1 border-r-[1px] border-gridLines" />
      <div className="col-span-1 border-r-[1px] border-gridLines" />
    </div>
  );
};

export default GridLines;
