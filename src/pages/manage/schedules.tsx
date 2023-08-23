import React from "react";

import { Block } from "@/features/base/components/Block";
import { ManageLayout } from "@/features/base/components/ManageLayout";
import { ContentHeader } from "@/features/base/components/header/ContentHeader";
import { ScheduleCalendarForTeacher } from "@/features/schedule/components/ScheduleCalendarForTeacher";

const Index = () => {
  return (
    <ManageLayout>
      <ContentHeader className="border-b" />

      <Block className="px-6 py-4">
        <ScheduleCalendarForTeacher />
      </Block>
    </ManageLayout>
  );
};

export default Index;
