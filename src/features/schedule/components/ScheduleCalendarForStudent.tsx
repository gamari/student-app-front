import React, { useState } from "react";

import { Event } from "react-big-calendar";

import { AddEventModal } from "./AddEventModal";
import { ProposeDate } from "../types";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { fetcher } from "@/features/base/libs/fethcers";
import { proposeDateToEvent } from "../libs/convertors";
import { ScheduleCalendar } from "./ScheduleCalendar";
import { BiLoader } from "react-icons/bi";
import { Block } from "@/features/base/components/Block";
import { Modal } from "@/features/base/components/Modal";
import { useModal } from "@/features/base/hooks/useModal";

// TODO eventとcourseの変換処理面倒くさい

export const ScheduleCalendarForStudent = () => {
  const { data: session } = useSession();

  const { data, error, isLoading } = useSWR(
    ["http://localhost:8000/propose-dates/", session?.access],
    ([url, token]) => fetcher(url, token)
  );

  const [selectedProposeDate, setSelectedProposeDate] = useState<ProposeDate>();
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);
  // TODO modalの実装

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

  const handleCloseAddEventModal = () => {
    setIsAddEventModalOpen(false);
  };

  const handleOpenAddEventModal = () => {
    setIsAddEventModalOpen(true);
  };

  const onComplete = () => {
    // TODO
  };

  if (error) return <div>取得に失敗しました</div>;
  if (!data) return <BiLoader />;

  if (data) {
    events = data.map((proposeDate: ProposeDate) =>
      proposeDateToEvent(proposeDate)
    );
  }

  return (
    <div style={{ height: 600 }}>
      <ScheduleCalendar events={events} onSelectEvent={handleEventSelect} />

      <div className="flex flex-row-reverse mt-6">
        <button
          onClick={handleOpenAddEventModal}
          className="bg-blue-600 text-white p-2 rounded-lg shadow-lg"
        >
          予定を追加する
        </button>
      </div>

      <Block className="mt-6">
        <div className="text-lg font-bold text-gray-600">次回の予定</div>
        <div className="p-2">未定</div>
      </Block>

      {isAddEventModalOpen && (
        <AddEventModal
          onClose={handleCloseAddEventModal}
          onComplete={onComplete}
        />
      )}

      <Modal
        isOpen={!!selectedProposeDate}
        onClose={() => {
          setSelectedProposeDate(undefined);
        }}
      >
        <div>{selectedProposeDate?.title}</div>
      </Modal>
    </div>
  );
};

export default ScheduleCalendarForStudent;
