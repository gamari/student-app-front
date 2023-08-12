import React, { FunctionComponent } from "react";

interface Props {
  className?: string;
}

export const SidebarTitle: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={`text-lg ${className}`}>
      {/* TODO logo */}
      <div>予約ページ</div>
    </div>
  );
};
