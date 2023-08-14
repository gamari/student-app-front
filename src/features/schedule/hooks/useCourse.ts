import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Course } from "../types";
import dayjs from "dayjs";

export const useCourse = () => {
    const [course, setCourse] = useState<Course>({
        title: "",
        start_time: dayjs().add(1, "day").toDate(),
    })
    const { data: session } = useSession();

    const saveCourse = async () => {
        validation();
        return axios.post(
            "http://localhost:8000/courses/reserve/",
            {
                title: course.title,
                start_time: course?.start_time?.toISOString(),
                end_time: course?.end_time?.toISOString(),
            },
            {
                headers: {
                    Authorization: `Bearer ${session?.access}`,
                },
            }
        );
    };

    const validation = () => {
        // start_timeが今日以前の場合はエラー
        if (dayjs(course.start_time).isBefore(dayjs(), "day")) throw new Error("開始日は翌日（青いパネルの次）以降にしてください。");
    }


    const setTitle = (title: string) => {
        setCourse(prev => ({ ...prev, title }));
    };

    const setStartTime = (start_time: Date) => {
        const endTime = new Date(start_time);
        endTime.setHours(endTime.getHours() + 1);
        setCourse(prev => ({ ...prev, start_time, end_time: endTime }));
    };

    const setEndTime = (end_time: Date) => {
        setCourse(prev => ({ ...prev, end_time }));
    };

    return { saveCourse, course, setTitle, setStartTime };
};
