import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";

type AddEventModalProps = {
  onClose: () => void;
};

export const AddEventModal: React.FC<AddEventModalProps> = ({ onClose }) => {
  const { data: session } = useSession();
  const timeOptions: string[] = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 30) {
      const hour = i.toString().padStart(2, "0");
      const minute = j.toString().padStart(2, "0");
      timeOptions.push(`${hour}:${minute}`);
    }
  }

  const [eventDetails, setEventDetails] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
  });

  const handleSave = async () => {
    try {
      // APIリクエストを行う
      await axios.post(
        "http://localhost:8000/courses/reserve/",
        {
          title: eventDetails.title,
          start_time: eventDetails.start.toISOString(),
          end_time: eventDetails.start.toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${session?.access}`,
          },
        }
      );

      alert("予定が追加されました");
      onClose();
    } catch (error) {
      alert("エラーが発生しました");
      console.error("Error saving event:", error);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    const time = new Date(eventDetails.start);
    date.setHours(time.getHours());
    date.setMinutes(time.getMinutes());
    setEventDetails((prev) => ({ ...prev, start: date }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [hour, minute] = e.target.value.split(":").map(Number);
    const date = new Date(eventDetails.start);
    date.setHours(hour);
    date.setMinutes(minute);
    setEventDetails((prev) => ({ ...prev, start: date }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-96">
        <h2 className="text-2xl mb-2">新しい予定を追加</h2>
        <div>
          <label className="block mb-2">タイトル:</label>
          <input
            type="text"
            value={eventDetails.title}
            onChange={(e) =>
              setEventDetails({ ...eventDetails, title: e.target.value })
            }
            className="border p-2 rounded w-full"
          />

          <div>
            <label className="block mb-2">開始日:</label>
            <input
              type="date"
              value={eventDetails.start.toISOString().split("T")[0]}
              onChange={handleDateChange}
              className="border p-2 rounded w-full mb-2"
            />
            <label className="block mb-2">開始時間:</label>
            <select
              value={`${eventDetails.start
                .getHours()
                .toString()
                .padStart(2, "0")}:${eventDetails.start
                .getMinutes()
                .toString()
                .padStart(2, "0")}`}
              onChange={handleTimeChange}
              className="border p-2 rounded w-full"
            >
              {timeOptions?.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onClose} className="p-2 bg-gray-200 rounded">
            キャンセル
          </button>
          <button
            onClick={handleSave}
            className="p-2 bg-blue-500 text-white rounded"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
};
