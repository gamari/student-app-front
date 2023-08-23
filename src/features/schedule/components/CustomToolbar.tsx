import { ToolbarProps } from "react-big-calendar";

export function CustomToolbar(toolbar: ToolbarProps) {
  const next = () => {
    toolbar.onNavigate("NEXT");
  };
  const prev = () => {
    toolbar.onNavigate("PREV");
  };

  return (
    <div className="flex flex-row space-x-2 mb-3 items-center">
      <div className="flex flex-row space-x-3">
        <button
          onClick={prev}
          className="px-2 bg-gray-500 text-white rounded-lg shadow"
        >
          前へ
        </button>
        <button
          onClick={next}
          className="p-2 bg-gray-500 text-white rounded-lg shadow"
        >
          次へ
        </button>
      </div>

      <div className="text-xl text-gray-600">{toolbar.label}</div>
    </div>
  );
}
