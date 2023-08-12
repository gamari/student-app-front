import { useEffect, useState } from 'react';
import { Schedule } from '../types';

const useCalendarEvents = () => {
    const [events, setEvents] = useState<Schedule[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSchedules = async () => {
            // TODO 
            const data: Schedule[] = []
            setEvents(data);
            setLoading(false);
        };

        fetchSchedules();
    }, []);

    return { events, loading };
};

export default useCalendarEvents;
