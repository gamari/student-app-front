import React, { useState } from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { Event } from "react-big-calendar";

import { Block } from "@/features/base/components/Block";
import { ScheduleCalendar } from "./ScheduleCalendar";
import { fetcher } from "@/features/base/libs/fethcers";
import { BiLoader } from "react-icons/bi";
import { proposeDateToEvent } from "../libs/convertors";
import { ProposeDate } from "../types";
import { Modal } from "@/features/base/components/Modal";

export const ScheduleCalendarForTeacher = () => {
  const { data: session } = useSession();
  const { data, error, isLoading } = useSWR(
    ["http://localhost:8000/propose-dates/", session?.access],
    ([url, token]) => fetcher(url, token)
  );
  const [selectedProposeDate, setSelectedProposeDate] = useState<ProposeDate>();

  let events: Event[] = [];

  const handleEventSelect = (event: Event) => {
    const { title, start, end } = event;

    if (!title || !start || !end) return;

    // TODO fix types
    const proposeDate: ProposeDate = {
      title: title.valueOf().toString() || "",
      start_time: start,
      end_time: end,
      course_duration: 60,
    };

    setSelectedProposeDate(proposeDate);
    console.log(proposeDate);
  };

  if (error) return <div>取得に失敗しました</div>;
  if (!data) return <BiLoader />;

  if (data) {
    events = data.map((proposeDate: ProposeDate) =>
      proposeDateToEvent(proposeDate)
    );
  }

  return (
    <Block>
      <ScheduleCalendar events={events} onSelectEvent={handleEventSelect} />

      <Modal
        isOpen={!!selectedProposeDate}
        onClose={() => {
          setSelectedProposeDate(undefined);
        }}
      >
        {selectedProposeDate && <div>test</div>}
      </Modal>
    </Block>
  );
};
