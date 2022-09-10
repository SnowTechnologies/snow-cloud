import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "../../server/src/router";

const getBaseUrl = () => {
    if (typeof window !== 'undefined') // browser should use relative path
        return '';
    
    // Assume localhost
    return "http://localhost:4000";
}

export const trpc = createTRPCNext<AppRouter>({
    config({ ctx }) {
        return {
            /**
             * If you want to use SSR, you need to use the server's full URL
             * @link https://trpc.io/docs/ssr
             **/
            url: `${getBaseUrl()}/v1`,
            /**
             * @link https://react-query-v3.tanstack.com/reference/QueryClient
             **/
            // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
        };
    },
    /**
     * @link https://trpc.io/docs/ssr
     **/
    ssr: true,
});