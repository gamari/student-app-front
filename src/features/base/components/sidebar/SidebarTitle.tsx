import React, { FunctionComponent } from "react";

interface Props {
  className?: string;
  title?: string;
}

export const SidebarTitle: FunctionComponent<Props> = ({
  className,
  title = "予約ページ",
}) => {
  return (
    <div className={`text-lg ${className}`}>
      <div>{title}</div>
    </div>
  );
};
