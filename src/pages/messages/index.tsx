import React, { useEffect, useState } from "react";

import { Layout } from "@/features/base/components/Layout";
import { ChatRoom } from "@/features/chat/ChatRoom";
import { Center } from "@/features/base/components/Center";
import { ChatFetcher } from "@/features/chat/libs/external/ChatFetcher";
import { useSession } from "next-auth/react";

const Index = () => {
  const { data: session } = useSession();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const init = async () => {
      const fethcer = new ChatFetcher(session?.access);
      const id = await fethcer.fetchEnterRoom();
    };

    if (session) {
      init();
    }
  }, [session]);

  return (
    <Layout>
      <Center className="h-screen">
        <ChatRoom />
      </Center>
    </Layout>
  );
};

export default Index;
