import { Layout } from "@/features/base/components/Layout";
import ScheduleForStudent from "@/features/schedule/components/ScheduleForStudent";
import React from "react";

const Index = () => {
  return (
    <Layout>
      <ScheduleForStudent />

      <div>次の講座の予定</div>
      <div>未定</div>
    </Layout>
  );
};

export default Index;
