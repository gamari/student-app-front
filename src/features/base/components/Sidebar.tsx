import React from "react";
import { signOut, useSession } from "next-auth/react";
import { ChatFetcher } from "@/features/chat/libs/external/ChatFetcher";
import { useRouter } from "next/router";
import { SidebarTitle } from "./sidebar/SidebarTitle";
import { SidebarLinks } from "./sidebar/SidebarLinks";
import { SidebarLink } from "./sidebar/SidebarLink";
import {
  HiChartPie,
  HiInbox,
  HiViewBoards,
  HiArrowSmLeft,
  HiArrowSmRight,
} from "react-icons/hi";
import { BiQuestionMark } from "react-icons/bi";

const theme = {
  color: {
    primary: "bg-red-500 hover:bg-red-600",
  },
};

export const Sidebar = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 h-screen w-[240px] bg-gray-700 text-white">
      <SidebarTitle className="px-4 py-4 border-b" />
      <div className={`flex flex-col gap-3 mt-5 px-2`}>
        <SidebarLink
          Icon={HiChartPie}
          label="ダッシュボード"
          onClick={() => router.push("/dashboard/")}
        />

        <SidebarLink
          Icon={BiQuestionMark}
          label="質問"
          onClick={() => {
            router.push(`/qa/`);
          }}
        />

        <SidebarLink
          Icon={HiViewBoards}
          label="予約"
          onClick={() => {
            router.push(`/schedule`);
          }}
          className="mb-4"
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
                router.push(`/`);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
