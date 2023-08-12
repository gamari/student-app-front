import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Course } from "../types";

export const useCourse = () => {
    const [course, setCourse] = useState<Course>({
        title: ""
    })
    const { data: session } = useSession();

    const saveCourse = async () => {
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
