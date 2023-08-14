import React, { FunctionComponent } from "react";
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { signOut, useSession } from "next-auth/react";
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiArrowSmLeft,
  HiArrowSmRight,
} from "react-icons/hi";
import { SidebarTitle } from "./sidebar/SidebarTitle";
import { SidebarLinks } from "./sidebar/SidebarLinks";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const ManageLayout: FunctionComponent<Props> = ({
  children,
  className = "",
}) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(session);

  if (status === "loading") return null;
  if (status === "unauthenticated" || session?.user?.user_type != "teacher") {
    router.push("/manage/login");
  }

  return (
    <div className="flex flex-row">
      <div className="sticky top-0 h-screen w-[200px] bg-slate-700 text-white">
        <SidebarTitle className="px-4 py-4 border-b" />
        <SidebarLinks className="px-2 mt-4" />
      </div>

      <main className={`flex-1 ${className}`}>{children}</main>
    </div>
  );
};
