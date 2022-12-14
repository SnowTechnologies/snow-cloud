import { t } from '@src/trpc';
import { authRouter } from '@src/routers/auth.router';

export const appRouter = t.router({
    user: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;