import { Layout } from "@/features/base/components/Layout";
import { Sidebar } from "@/features/base/components/Sidebar";
import { LoginForm } from "@/features/user/components/LoginForm";
import { Card } from "flowbite-react";
import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <LoginForm />
    </main>
  );
}
