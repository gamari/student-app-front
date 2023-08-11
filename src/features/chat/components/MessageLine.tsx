import React, { FunctionComponent } from "react";
import { Message } from "../types";

interface Props {
  message: Message;
  className?: string;
  isMe: boolean;
}

const MessageLine: FunctionComponent<Props> = ({
  message,
  isMe = false,
  className = "",
}) => {
  return (
    <div
      className={`
      flex flex-row
      ${isMe ? "justify-end" : "justify-start"}
      ${className}
    `}
    >
      <div
        className={`
          max-w-[300px]
          whitespace-pre-wrap
          border p-4 w-fit rounded-lg shadow
          ${isMe ? "bg-blue-200" : "bg-gray-200"}
      `}
      >
        {message.content || ""}
      </div>
    </div>
  );
};

export default MessageLine;
