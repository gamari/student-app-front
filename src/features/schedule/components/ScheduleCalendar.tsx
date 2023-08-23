import React, { FunctionComponent } from "react";

import dayjs from "dayjs";
import { Calendar, Event, dayjsLocalizer } from "react-big-calendar";

import { CustomToolbar } from "./CustomToolbar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/ja";

dayjs.locale("ja");

const localizer = dayjsLocalizer(dayjs);

interface Props {
  events: Event[];
  onSelectEvent: (event: Event) => void;
  onShowMore?: (events: Event[], date: Date) => void;
}

// TODO show moreの実装

export const ScheduleCalendar: FunctionComponent<Props> = ({
  events,
  onSelectEvent,
  onShowMore,
}) => {
  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{
        height: 500,
        width: "100%",
        minWidth: "300px",
        maxWidth: "800px",
      }}
      views={["month"]}
      defaultView="month"
      onSelectEvent={onSelectEvent}
      formats={{
        monthHeaderFormat: (date: Date) => dayjs(date).format("YYYY年MM月"),
        dateFormat: (date: Date) => dayjs(date).format("D"),
      }}
      components={{
        toolbar: CustomToolbar,
      }}
      onShowMore={onShowMore}
    />
  );
};
