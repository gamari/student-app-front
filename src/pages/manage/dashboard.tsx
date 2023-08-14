import { ManageLayout } from "@/features/base/components/ManageLayout";
import { UserFetcher } from "@/features/user/libs/UserFetcher";
import { Account } from "@/features/user/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [students, setStudents] = React.useState<Account[]>([]);

  useEffect(() => {
    if (!session?.access) return;
    const fetch = async () => {
      const fetcher = new UserFetcher();
      const students = await fetcher.getStudents(session?.access as string);
      setStudents(students);
    };
    fetch();
  }, [session]);

  return (
    <ManageLayout>
      <div className="p-6">
        <div className="text-xl font-bold">生徒一覧</div>

        <div className="flex flex-col space-y-2">
          {students.map((student) => (
            <div
              className="p-4 border rounded-lg grid grid-cols-4"
              key={student.id}
            >
              <div>{student.username}</div>
              <div className="flex flex-col">
                <div>次回の講義</div>
                <div></div>
              </div>

              <div>
                <button
                  className="bg-sky-500 text-white rounded-lg p-2"
                  onClick={() => {
                    router.push(`/manage/messages/${student.id}`);
                  }}
                >
                  メッセージ
                </button>
              </div>

              <div>
                {student.is_active ? (
                  <button
                    className="p-2 bg-green-500 text-white rounded-lg"
                    onClick={() => {
                      // TODO
                    }}
                  >
                    有効
                  </button>
                ) : (
                  <button>無効</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ManageLayout>
  );
};

export default Index;
