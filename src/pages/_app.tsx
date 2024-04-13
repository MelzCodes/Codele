import "../styles/globals.css";
import type { AppProps } from "next/app"
import Head from "next/head";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from "@clerk/themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>LeetCode Daily</title>
                <meta name='viewport' content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <meta name="description" content="Solve Leetcode problems daily!" />
            </Head>
            <ToastContainer />
            <ClerkProvider appearance={{
              baseTheme: dark,
            }}>
                <Component {...pageProps} />
            </ClerkProvider>
        </>
    )
}