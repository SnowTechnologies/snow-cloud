import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

import { Context } from '@src/trpc/context';

export const t = initTRPC.context<Context>().create({
    transformer: superjson,
    errorFormatter({ shape }) {
        return shape;
    },
});