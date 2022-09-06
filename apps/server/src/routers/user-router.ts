import { initTRPC } from '@trpc/server';
import { z } from 'zod';

import { t } from '@src/trpc';

type User = {
    id: string;
    name: string;
    bio?: string;
};

const users: Record<string, User> = {};

export const userRouter = t.router({
    version: t.procedure.query(() => {
        return { version: '0.42.0' };
    }),

    getUserById: t.procedure.input(z.string()).query(({ input }) => {
        return users[input];
    }),

    createUser: t.procedure
    .input(
        z.object({
            name: z.string().min(3),
            bio: z.string().max(142).optional(),
        }),
    )
    .mutation(({ input }) => {
        const id = Date.now().toString();
        const user: User = { id, ...input };
        users[user.id] = user;
        return user;
    }),
})