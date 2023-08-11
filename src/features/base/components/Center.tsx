import React, { FunctionComponent } from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const Center: FunctionComponent<Props> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`
      flex items-center justify-center 
      ${className}
    `}
    >
      {children}
    </div>
  );
};
