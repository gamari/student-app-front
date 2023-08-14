import { Layout } from "@/features/base/components/Layout";
import ScheduleForStudent from "@/features/schedule/components/ScheduleForStudent";
import React from "react";

const Index = () => {
  return (
    <Layout className="px-6 py-4">
      <ScheduleForStudent />
    </Layout>
  );
};

export default Index;
