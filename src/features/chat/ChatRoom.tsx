import React, { FunctionComponent, useEffect, useState } from "react";

import { ChatTextarea } from "./ChatTextarea";
import { Message, Room } from "./types";
import MessageLine from "./components/MessageLine";
import { ChatFetcher } from "./libs/external/ChatFetcher";
import { useSession } from "next-auth/react";

interface Props {
  room: Room;
}

export const ChatRoom: FunctionComponent<Props> = ({ room }) => {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = React.useState("");

  useEffect(() => {
    if (!session) return;
    const init = async () => {
      const fetcher = new ChatFetcher(session?.access);
      const newMessages = await fetcher.fetchMessages(room.id);
      setMessages(newMessages);
    };

    init();
  }, [session, room]);

  const handleOnSubmit = async (content: string) => {
    if (!session) return;
    const fetcher = new ChatFetcher(session?.access);
    const newMessage: Message = {
      content,
      room: room.id || "",
    };
    const createdMessage = await fetcher.createMessage(newMessage);
    setMessages([...messages, createdMessage]);
  };

  return (
    <div
      className={`
        h-[600px] w-full max-w-[500px]
        flex flex-col
        border border-gray-400 rounded-lg shadow-lg
        overflow-hidden
      `}
    >
      <div className="p-3 bg-gray-100">チャットルーム</div>
      <div className="flex-1 border-y space-y-3 border-gray-300 px-6 py-4 overflow-y-scroll pb-20">
        {messages.map((message) => (
          <MessageLine
            key={message.id}
            message={message}
            isMe={message.created_by === session?.user?.id}
          />
        ))}
      </div>

      <ChatTextarea
        text={message}
        setText={setMessage}
        className="pr-2"
        onSubmit={handleOnSubmit}
      />
    </div>
  );
};
