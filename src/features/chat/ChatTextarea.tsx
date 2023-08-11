import React, { FunctionComponent } from "react";
import { BiPaperPlane } from "react-icons/bi";
import { Message } from "./types";

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  onSubmit?: (content: string) => void;
}

export const ChatTextarea: FunctionComponent<Props> = ({
  text,
  setText,
  className = "",
  onSubmit,
}) => {
  return (
    <div
      className={`flex flex-row items-end space-x-3
    ${className}
    `}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        placeholder="メッセージ..."
        className="flex-1 resize-none border-none outline-none focus:ring-0"
      />

      <BiPaperPlane
        size={36}
        className="text-white bg-blue-500 rounded-lg p-1 mb-1 cursor-pointer hover:scale-110 transition-all"
        onClick={() => {
          if (onSubmit) {
            onSubmit(text);
            setText("");
          }
        }}
      />
    </div>
  );
};
