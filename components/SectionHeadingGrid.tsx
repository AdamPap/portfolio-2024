import React from "react";

type Margin = "my-40" | "my-20" | "my-10";

interface Props {
  bigHeading: React.ReactNode;
  smallHeading: React.ReactNode;
  supportingText: React.ReactNode;
  margin?: Margin;
}

const SectionHeadingGrid: React.FC<Props> = ({
  bigHeading,
  smallHeading,
  supportingText,
  margin,
}) => {
  return (
    <div className={`grid grid-cols-4 ${margin}`}>
      <div>
        <h1 className="text-[9vw] leading-[0.8]">{bigHeading}</h1>
      </div>
      <h3 className="col-start-3 text-darkGray font-medium text-[32px] self-end">
        {smallHeading}
      </h3>
      <h3 className="text-darkGray font-medium text-[32px] self-end">
        {supportingText}
      </h3>
    </div>
  );
};

export default SectionHeadingGrid;
