import SectionHeadingGrid from "@/components/SectionHeadingGrid";
import React from "react";

const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between pt-4">
      <SectionHeadingGrid
        bigHeading="Contact"
        smallHeading={
          <span>
            Feel free to <br /> reach out
          </span>
        }
        supportingText
      />

      <div className="grid grid-cols-4">
        <div className="col-start-2 flex flex-col font-semibold text-8xl">
          <span>hello@adam</span>
          <span>papamastorakis.com</span>
        </div>
      </div>

      <div className="grid grid-cols-4 text-darkGray text-base mb-4">
        <div>
          portfolio@2024 <br /> all rights reserved
        </div>
        <div>
          Have a fun <br /> 'day' afternoon!
        </div>
        <div>
          14:56 UTC <br />
          13 Jan 2024
        </div>
        <div>
          Design and Development <br />
          by Adam Papamastorakis
        </div>
      </div>
    </div>
  );
};

export default Footer;
