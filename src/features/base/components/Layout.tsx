import React, { FunctionComponent } from "react";
import { Sidebar } from "./Sidebar";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Layout: FunctionComponent<Props> = ({
  children,
  className = "",
}) => {
  return (
    <div className="flex flex-row ">
      <Sidebar />

      <main className={`flex-1 ${className}`}>{children}</main>
    </div>
  );
};
