import React, { FunctionComponent } from "react";
import { SidebarLink } from "./SidebarLink";
import {
  HiArrowSmLeft,
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiViewBoards,
} from "react-icons/hi";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { ChatFetcher } from "@/features/chat/libs/external/ChatFetcher";

interface Props {
  className?: string;
}

export const SidebarLinks: FunctionComponent<Props> = ({ className }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleEnter = async () => {
    const fethcer = new ChatFetcher(session?.access);
    const room = await fethcer.fetchEnterRoom();
    if (room.room_id) {
      router.push(`/rooms/${room.room_id}`);
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <SidebarLink Icon={HiChartPie} label="ダッシュボード" />
      <SidebarLink
        Icon={HiInbox}
        label="メッセージ"
        onClick={() => {
          handleEnter();
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
              router.push(`/login`);
            }}
          />
        )}
      </div>
    </div>
  );
};
