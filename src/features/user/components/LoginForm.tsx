import { Label, TextInput, Button } from "flowbite-react";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // リダイレクトを無効化
    });

    console.log(result);

    if (!result?.ok) {
      setError(
        "ログインに失敗しました。メールアドレスまたはパスワードが正しくありません。"
      );
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <form
      className="flex w-[400px] bg-white p-4 rounded-lg flex-col gap-4"
      onSubmit={handleSignIn}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="メールアドレス" />
        </div>
        <TextInput
          id="email1"
          placeholder="youremail@example.com"
          required
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="パスワード" />
        </div>
        <TextInput
          id="password1"
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button type="submit" color="dark">
        ログイン
      </Button>

      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
    </form>
  );
};
