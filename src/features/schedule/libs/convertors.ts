import { Event } from "react-big-calendar";
import { ProposeDate } from "../types";

export function proposeDateToEvent(proposeDate: ProposeDate): Event {
    const start = new Date(proposeDate.start_time);
    const end = new Date(
        start.getTime() + proposeDate.course_duration * 60 * 1000
    );

    const event = {
        title: `テスト`,
        start: start,
        end: end,
    };
    console.log(event);

    return event;
}