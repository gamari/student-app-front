import React, { FunctionComponent } from "react";

import { Calendar, Event, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import { CustomToolbar } from "./CustomToolbar";

dayjs.locale("ja");

const localizer = dayjsLocalizer(dayjs);

interface Props {
  events: Event[];
  onSelectEvent: (event: Event) => void;
}

export const ScheduleCalendar: FunctionComponent<Props> = ({
  events,
  onSelectEvent,
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
    />
  );
};
