import type { AppType } from "next/dist/shared/lib/utils";
import { trpc } from "@utils/trpc";

import type { AppProps } from "next/app";
import Head from "next/head";

import "@styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default trpc.withTRPC(MyApp);