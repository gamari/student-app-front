import React, { useState } from "react";

import { Event } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/ja";

import { AddEventModal } from "./AddEventModal";
import { ProposeDate } from "../types";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { fetcher } from "@/features/base/libs/fethcers";
import { proposeDateToEvent } from "../libs/convertors";
import { ScheduleCalendar } from "./SchduleCalendar";
import { BiLoader } from "react-icons/bi";

// TODO eventとcourseの変換処理面倒くさい

export const ScheduleForStudent = () => {
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

      <div className="mt-6">
        <button
          onClick={handleOpenAddEventModal}
          className="bg-blue-500 text-white p-2 rounded-full shadow-lg"
        >
          予定を追加する
        </button>
      </div>

      <div>次の講座の予定</div>
      <div>未定</div>

      {isAddEventModalOpen && (
        <AddEventModal
          onClose={handleCloseAddEventModal}
          onComplete={onComplete}
        />
      )}

      {/* TODO 選択したイベントをモーダルで表示 */}
    </div>
  );
};

export default ScheduleForStudent;
