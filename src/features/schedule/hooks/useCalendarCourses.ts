import { Event } from "react-big-calendar";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { Course } from '../types';
import dayjs from 'dayjs';

const useCalendarEvents = () => {
    const { data: session } = useSession();
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!session) return;
        const fetchSchedules = async () => {
            const response = await axios.get("http://localhost:8000/courses/?month=2023-08", {
                headers: {
                    Authorization: `Bearer ${session?.access}`,
                },
            });
            const data: Event[] = [];

            (response.data as Course[]).forEach(item => {
                data.push({
                    title: item.title,
                    start: dayjs(item.start_time).toDate(),
                    end: dayjs(item.start_time).toDate()
                })
            })
            console.log(data);
            setEvents(data);
            setLoading(false);
        };

        fetchSchedules();
    }, [session]);

    return { events, loading };
};

export default useCalendarEvents;
