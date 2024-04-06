import "../styles/globals.css";
import type { AppProps } from "next/app"
import Head from "next/head";
import { ClerkProvider } from '@clerk/nextjs'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>LeetCodeDaily</title>
                <meta name='viewport' content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <meta name="description" content="Solve Leetcode problems daily!" />
            </Head>
            <ClerkProvider>
                <Component {...pageProps} />
            </ClerkProvider>
        </>
    )
}