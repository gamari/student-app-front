import { Event } from "react-big-calendar";
import { ProposeDate } from "../types";
import dayjs from "dayjs";

export function proposeDateToEvent(proposeDate: ProposeDate): Event {
    const start = new Date(proposeDate.start_time);
    const end = new Date(
        start.getTime() + proposeDate.course_duration * 60 * 1000
    );

    const event = {
        title: `${dayjs(proposeDate.start_time).format("hh:mm")} ${proposeDate.course_duration}分`,
        start: start,
        end: end,
    };

    return event;
}