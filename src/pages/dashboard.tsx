import { Layout } from "@/features/base/components/Layout";
import { useSession } from "next-auth/react";
import React from "react";

const Index = () => {
  const { status } = useSession();

  if (status === "loading") return null;

  return (
    <Layout>
      <div>login</div>
    </Layout>
  );
};

export default Index;
