import React from "react";
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import {
  HiArrowSmLeft,
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { signOut, useSession } from "next-auth/react";
import { ChatFetcher } from "@/features/chat/libs/external/ChatFetcher";
import { useRouter } from "next/router";

export const Sidebar = () => {
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
    <FlowbiteSidebar
      aria-label="Default sidebar example "
      className="sticky top-0 h-screen"
    >
      <FlowbiteSidebar.Logo
        href="#"
        img="/images/logo.png"
        imgAlt="Flowbite logo"
      >
        <div>予約ページ</div>
      </FlowbiteSidebar.Logo>

      <FlowbiteSidebar.Items>
        <FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.Item href="/dashboard" icon={HiChartPie}>
            <p>ダッシュボード</p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            icon={HiViewBoards}
            onClick={() => handleEnter()}
            label="Pro"
            labelColor="dark"
          >
            <p>メッセージ</p>
          </FlowbiteSidebar.Item>

          <FlowbiteSidebar.Item href="#" icon={HiInbox} label="3">
            <p>予約</p>
          </FlowbiteSidebar.Item>

          {session ? (
            <FlowbiteSidebar.Item
              href="#"
              icon={HiArrowSmLeft}
              onClick={() => signOut()}
              className="mt-10"
            >
              <p>ログアウト</p>
            </FlowbiteSidebar.Item>
          ) : (
            <FlowbiteSidebar.Item
              href="/"
              icon={HiArrowSmRight}
              className="mt-10"
            >
              <p>ログイン</p>
            </FlowbiteSidebar.Item>
          )}
        </FlowbiteSidebar.ItemGroup>
      </FlowbiteSidebar.Items>
    </FlowbiteSidebar>
  );
};
