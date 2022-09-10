import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home | Snow Cloud</title>
            </Head>
            {process.env.NODE_ENV !== "production" && (
                <ReactQueryDevtools initialIsOpen={true} />
            )}
        </>
    );
};

export default Home;
