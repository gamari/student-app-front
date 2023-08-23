import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export const Block: FunctionComponent<Props> = ({
  className = "",
  onClick,
  children,
}) => {
  return (
    <div className={`${className}`} onClick={onClick}>
      {children}
    </div>
  );
};
