import dayjs from "dayjs";
import React, { useState } from "react";
import { Calendar, ToolbarProps, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/ja";
import { Schedule } from "../types";
import useCalendarEvents from "../hooks/useCalendarEvents";
import { AddEventModal } from "./AddEventModal";

dayjs.locale("ja");

const localizer = dayjsLocalizer(dayjs);

function CustomToolbar(toolbar: ToolbarProps) {
  const next = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() + 1);
    toolbar.onNavigate("NEXT");
  };
  const prev = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() - 1);
    toolbar.onNavigate("NEXT");
  };

  return (
    <div className="flex flex-row space-x-2">
      <div className="flex flex-row space-x-3">
        <button onClick={prev}>前へ</button>
        <button onClick={next}>次へ</button>
      </div>

      <div>{toolbar.label}</div>
    </div>
  );
}

export const ScheduleForStudent = () => {
  const { events, loading } = useCalendarEvents();
  const [selectedEvent, setSelectedEvent] = useState<Schedule>();
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);
  // TODO modalの実装

  const handleEventSelect = (event: Schedule) => {
    setSelectedEvent(event);
    // TODO modalのオープン
  };

  const handleCloseAddEventModal = () => {
    setIsAddEventModalOpen(false);
  };

  const handleOpenAddEventModal = () => {
    setIsAddEventModalOpen(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: 600, width: "100%" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: "700px" }}
        views={["month"]}
        defaultView="month"
        onSelectEvent={handleEventSelect}
        formats={{
          monthHeaderFormat: (date: Date) => dayjs(date).format("YYYY年MM月"),
          dateFormat: (date: Date) => dayjs(date).format("D"),
        }}
        components={{
          toolbar: CustomToolbar,
        }}
      />

      <div className="mt-6">
        <button
          onClick={handleOpenAddEventModal}
          className="bg-blue-500 text-white p-2 rounded-full shadow-lg"
        >
          予定を追加する
        </button>
      </div>

      {/* TODO 選択したイベントをモーダルで表示 */}
      {isAddEventModalOpen && (
        <AddEventModal onClose={handleCloseAddEventModal} />
      )}
    </div>
  );
};

export default ScheduleForStudent;
