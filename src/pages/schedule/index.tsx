import React from "react";

import { Layout } from "@/features/base/components/Layout";
import { ContentHeader } from "@/features/base/components/header/ContentHeader";
import ScheduleForStudent from "@/features/schedule/components/ScheduleCalendar";
import { Block } from "@/features/base/components/Block";

const Index = () => {
  return (
    <Layout>
      <ContentHeader className="border-b" />

      <Block className="px-6 py-4">
        <ScheduleForStudent />
      </Block>
    </Layout>
  );
};

export default Index;
