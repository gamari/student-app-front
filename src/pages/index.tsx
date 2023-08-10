import { LoginForm } from "@/features/user/components/LoginForm";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <LoginForm />
    </main>
  );
}
