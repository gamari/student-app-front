import dayjs from "dayjs";
import React, { useState } from "react";
import { Calendar, Event, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/ja";
import useCalendarEvents from "../hooks/useCalendarCourses";
import { AddEventModal } from "./AddEventModal";
import { Course } from "../types";
import { CustomToolbar } from "./CustomToolbar";

// TODO eventとcourseの変換処理面倒くさい

dayjs.locale("ja");

const localizer = dayjsLocalizer(dayjs);

export const ScheduleForStudent = () => {
  const { events, loading, fetchSchedules } = useCalendarEvents();

  const [selectedCourse, setSelectedCourse] = useState<Course>();
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);
  // TODO modalの実装

  const handleEventSelect = (event: Event) => {
    const { title, start, end } = event;
    const course: Course = {
      title: title as string,
      start_time: start,
      end_time: end,
    };
    setSelectedCourse(course);
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
    <div style={{ height: 600 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: "700px" }}
        views={["month"]}
        defaultView="month"
        onSelectEvent={(event) => {
          handleEventSelect(event);
        }}
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

      <div>次の講座の予定</div>
      <div>未定</div>

      {/* TODO 選択したイベントをモーダルで表示 */}
      {isAddEventModalOpen && (
        <AddEventModal
          onClose={handleCloseAddEventModal}
          onComplete={fetchSchedules}
        />
      )}
    </div>
  );
};

export default ScheduleForStudent;
