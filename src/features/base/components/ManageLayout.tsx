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
import { SidebarLink } from "./sidebar/SidebarLink";

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
        <div className={`flex flex-col`}>
          <SidebarLink
            Icon={HiChartPie}
            label="ダッシュボード"
            onClick={() => router.push("/manage/dashboard/")}
          />

          <div className="mt-4">
            {session ? (
              <SidebarLink
                Icon={HiArrowSmLeft}
                label="ログアウト"
                onClick={() => {
                  signOut();
                }}
              />
            ) : (
              <SidebarLink
                Icon={HiArrowSmRight}
                label="ログイン"
                onClick={() => {
                  router.push(`/manage/login`);
                }}
              />
            )}
          </div>
        </div>
      </div>

      <main className={`flex-1 ${className}`}>{children}</main>
    </div>
  );
};
