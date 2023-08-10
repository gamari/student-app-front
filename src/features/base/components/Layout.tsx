import React, { FunctionComponent } from "react";
import { Sidebar } from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

export const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="flex flex-row">
      <Sidebar />

      <main className="flex-1">{children}</main>
    </div>
  );
};
