import { ActionButtons } from "./ActionButtons";
import { useCourse } from "../hooks/useCourse";
import { EventTitle } from "./event/EventTitle";
import { EventDate } from "./event/EventDate";

type AddEventModalProps = {
  onClose: () => void;
  onComplete: () => void;
};

export const AddEventModal: React.FC<AddEventModalProps> = ({
  onClose,
  onComplete,
}) => {
  const { course, saveCourse, setTitle, setStartTime } = useCourse();

  const handleSave = async () => {
    try {
      await saveCourse();
      alert("予定が追加されました");
      onClose();
      onComplete();
    } catch (error) {
      alert("エラーが発生しました");
      console.error("Error saving event:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="border-2 border-gray-500 bg-white p-4 rounded shadow-lg w-96">
        <h2 className="text-2xl mb-2">新しい予定を追加</h2>
        <EventTitle
          value={course.title}
          onChange={(title) => setTitle(title)}
        />
        <EventDate
          label="開始日"
          date={course.start_time}
          onDateChange={(date) => setStartTime(date)}
        />

        <ActionButtons onClose={onClose} onSave={handleSave} />
      </div>
    </div>
  );
};
