import React from "react";
import { signOut, useSession } from "next-auth/react";
import { ChatFetcher } from "@/features/chat/libs/external/ChatFetcher";
import { useRouter } from "next/router";
import { SidebarTitle } from "./sidebar/SidebarTitle";
import { SidebarLinks } from "./sidebar/SidebarLinks";

const theme = {
  color: {
    primary: "bg-red-500 hover:bg-red-600",
  },
};

export const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="sticky top-0 h-screen w-[200px] bg-slate-700 text-white">
      <SidebarTitle className="px-4 py-4 border-b" />
      <SidebarLinks className="px-2 mt-4" />
    </div>
  );
};
