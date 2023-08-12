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

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const ManageLayout: FunctionComponent<Props> = ({
  children,
  className = "",
}) => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-row">
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
              onClick={() => {
                // TODO
              }}
              label="Pro"
              labelColor="dark"
            >
              <p>メッセージ</p>
            </FlowbiteSidebar.Item>

            <FlowbiteSidebar.Item href="/schedule" icon={HiInbox} label="3">
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

      <main className={`flex-1 ${className}`}>{children}</main>
    </div>
  );
};
