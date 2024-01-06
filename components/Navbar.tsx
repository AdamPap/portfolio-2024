import NavLink from "@/components/NavLink";
import React from "react";

const Navbar = () => {
  return (
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
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
