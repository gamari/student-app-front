import React from "react";
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { signOut, useSession } from "next-auth/react";

export const Sidebar = () => {
  const { data: session } = useSession();

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
          <FlowbiteSidebar.Item href="#" icon={HiChartPie}>
            <p>ダッシュボード</p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href="#"
            icon={HiViewBoards}
            label="Pro"
            labelColor="dark"
          >
            <p>Kanban</p>
          </FlowbiteSidebar.Item>

          <FlowbiteSidebar.Item href="#" icon={HiInbox} label="3">
            <p>予約</p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiUser}>
            <p>講座一覧</p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiShoppingBag}>
            <p>Products</p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiArrowSmRight}>
            <p>Sign In</p>
          </FlowbiteSidebar.Item>
          {session ? (
            <FlowbiteSidebar.Item
              href="#"
              icon={HiTable}
              onClick={() => signOut()}
            >
              <p>ログアウト</p>
            </FlowbiteSidebar.Item>
          ) : (
            <FlowbiteSidebar.Item href="/" icon={HiTable}>
              <p>ログイン</p>
            </FlowbiteSidebar.Item>
          )}
        </FlowbiteSidebar.ItemGroup>
      </FlowbiteSidebar.Items>
    </FlowbiteSidebar>
  );
};
