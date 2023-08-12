import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Flowbite } from "flowbite-react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Flowbite>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Flowbite>
  );
}
