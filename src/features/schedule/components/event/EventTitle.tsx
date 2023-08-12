export const EventTitle: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => (
  <div>
    <label className="block mb-2">タイトル:</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded w-full"
    />
  </div>
);
