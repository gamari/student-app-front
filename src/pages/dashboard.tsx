import { Center } from "@/features/base/components/Center";
import { Layout } from "@/features/base/components/Layout";
import { useSession } from "next-auth/react";
import React from "react";

const Index = () => {
  const { status } = useSession();

  if (status === "loading") return null;

  return (
    <Layout>
      <Center className="h-screen text-3xl">準備中</Center>
    </Layout>
  );
};

export default Index;
