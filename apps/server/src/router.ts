import { initTRPC } from '@trpc/server';
import { z } from 'zod';

import { t } from '@src/trpc';
import { userRouter } from '@src/routers/user-router';

export const appRouter = t.router({
    user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;