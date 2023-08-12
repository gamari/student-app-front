export const generateTimeOptions = (): string[] => {
    const timeOptions: string[] = [];
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j += 30) {
            const hour = i.toString().padStart(2, "0");
            const minute = j.toString().padStart(2, "0");
            timeOptions.push(`${hour}:${minute}`);
        }
    }
    return timeOptions;
};

export const mergeDateAndTime = (date: Date, time: Date): Date => {
    date.setHours(time.getHours());
    date.setMinutes(time.getMinutes());
    return date;
};

export const setTimeToDate = (date: Date, timeString: string): Date => {
    const [hour, minute] = timeString.split(":").map(Number);
    date.setHours(hour);
    date.setMinutes(minute);
    return date;
};
