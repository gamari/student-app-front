export const ActionButtons: React.FC<{
  onClose: () => void;
  onSave: () => Promise<void>;
}> = ({ onClose, onSave }) => (
  <div className="mt-4 flex justify-end space-x-2">
    <button onClick={onClose} className="p-2 bg-gray-200 rounded">
      キャンセル
    </button>
    <button onClick={onSave} className="p-2 bg-blue-600 text-white rounded">
      保存
    </button>
  </div>
);
