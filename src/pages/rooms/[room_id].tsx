import React from "react";

import { Center } from "@/features/base/components/Center";
import { Layout } from "@/features/base/components/Layout";
import { ChatRoom } from "@/features/chat/ChatRoom";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const { room_id } = router.query;

  return (
    <Layout>
      <Center className="h-screen">
        {room_id && (
          <ChatRoom
            room={{
              id: room_id as string,
            }}
          />
        )}
      </Center>
    </Layout>
  );
};

export default Index;
