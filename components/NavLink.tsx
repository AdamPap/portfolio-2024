"use client";

import { useCursorSize } from "@/hooks/useCursorSize";
import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const { handleMouseEnter, handleMouseLeave } = useCursorSize();

  return (
    <Link
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
