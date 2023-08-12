import { generateTimeOptions } from "@/features/base/libs/dateHelpers";
import React, { useState, useEffect } from "react";

type EventDateProps = {
  label: string;
  date: Date | undefined;
  onDateChange: (date: Date) => void;
};

export const EventDate: React.FC<EventDateProps> = ({
  label,
  date,
  onDateChange,
}) => {
  const timeOptions = generateTimeOptions();
  const [selectedDate, setSelectedDate] = useState(
    date?.toISOString().split("T")[0] || ""
  );
  const [selectedTime, setSelectedTime] = useState(
    date?.toTimeString().split(" ")[0] || "00:00:00"
  );
  const [previousDate, setPreviousDate] = useState<Date | undefined>(date);

  useEffect(() => {
    if (selectedDate && selectedTime) {
      const newDate = new Date(`${selectedDate}T${selectedTime}`);
      if (!previousDate || newDate.getTime() !== previousDate.getTime()) {
        onDateChange(newDate);
        setPreviousDate(newDate);
      }
    }
  }, [selectedDate, selectedTime, onDateChange]);

  return (
    <div className="mb-4">
      <label className="block mb-2">{label}</label>
      <div className="flex gap-2">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border rounded p-2"
        />
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="border rounded p-2"
        >
          {timeOptions.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
