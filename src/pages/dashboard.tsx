import { Center } from "@/features/base/components/Center";
import { DashbordPanel } from "@/features/base/components/DashbordPanel";
import { Layout } from "@/features/base/components/Layout";
import { useSession } from "next-auth/react";
import React from "react";

const Index = () => {
  const { status } = useSession();

  if (status === "loading") return null;

  return (
    <Layout className="p-6 py-4 flex flex-row  flex-wrap gap-4">
      <DashbordPanel>
        <h2 className="font-bold text-xl">次の講座</h2>
        <div>11:00～</div>
      </DashbordPanel>
      <DashbordPanel>
        <h2 className="font-bold text-xl">TODO一覧</h2>
        <div>11:00～</div>
      </DashbordPanel>
      <DashbordPanel>
        <h2 className="font-bold text-xl">メッセージ</h2>
        <div>TODO一覧</div>
      </DashbordPanel>
      <DashbordPanel>
        <h2 className="font-bold text-xl">お知らせ</h2>
        <div>TODO一覧</div>
      </DashbordPanel>
    </Layout>
  );
};

export default Index;
