import { LoginForm } from "@/features/user/components/LoginForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <LoginForm />
    </main>
  );
}
