import { createTRPCNext } from "@trpc/next";
import superjson from 'superjson';

import type { AppRouter } from "../../server/src/router";

export const trpc = createTRPCNext<AppRouter>({
    config({ ctx }) {
        if (typeof window !== 'undefined') {
            return {
                transformer: superjson,
                url: '/v1',
            }
        }

       return {
        transformer: superjson,
        url: "http://localhost:4000/v1",
        headers: {
            'x-ssr': '1',
        }
       };
    },
    /**
     * @link https://trpc.io/docs/ssr
     **/
    ssr: true,
});