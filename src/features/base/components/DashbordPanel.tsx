import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}
export const DashbordPanel: FunctionComponent<Props> = ({
  className,
  children,
}) => {
  return (
    <div
      className={`w-full md:w-[45%] h-[40%] border rounded-lg shadow-lg p-3 ${className}`}
    >
      {children}
    </div>
  );
};
