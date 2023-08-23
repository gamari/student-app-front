import React from "react";

import { Layout } from "@/features/base/components/Layout";
import { ContentHeader } from "@/features/base/components/header/ContentHeader";
import ScheduleCalendarForStudent from "@/features/schedule/components/ScheduleCalendarForStudent";
import { Block } from "@/features/base/components/Block";

const Index = () => {
  return (
    <Layout>
      <ContentHeader className="border-b" />

      <Block className="px-6 py-4">
        <ScheduleCalendarForStudent />
      </Block>
    </Layout>
  );
};

export default Index;
