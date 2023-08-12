import { useEffect, useState } from 'react';
import { Schedule } from '../types';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const useCalendarEvents = () => {
    const { data: session } = useSession();
    const [events, setEvents] = useState<Schedule[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!session) return;
        const fetchSchedules = async () => {
            const response = await axios.get("http://localhost:8000/courses/?month=2023-08", {
                headers: {
                    Authorization: `Bearer ${session?.access}`,
                },
            });
            const data: Schedule[] = [];

            (response.data as Schedule[]).forEach(item => {
                data.push({
                    title: item.title,
                    start: item.start,
                    end: item.end
                })
            })
            setEvents(data);
            setLoading(false);
        };

        fetchSchedules();
    }, [session]);

    return { events, loading };
};

export default useCalendarEvents;
