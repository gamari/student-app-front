import { ManageLayout } from "@/features/base/components/ManageLayout";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  const user_id = router.query.user_id;
  return <ManageLayout>{user_id}</ManageLayout>;
};

export default Index;
