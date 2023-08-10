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

export const Sidebar = () => {
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
            <p>Dashboard</p>
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
            <p>Inbox</p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiUser}>
            <p>Users</p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiShoppingBag}>
            <p>Products</p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiArrowSmRight}>
            <p>Sign In</p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiTable}>
            <p>Sign Up</p>
          </FlowbiteSidebar.Item>
        </FlowbiteSidebar.ItemGroup>
      </FlowbiteSidebar.Items>
    </FlowbiteSidebar>
  );
};
