import { inferAsyncReturnType } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';

import { prisma } from '@src/db/client';

export function createContext({ req, res }: CreateFastifyContextOptions) {
    return { req, res, prisma };
}

export type Context = inferAsyncReturnType<typeof createContext>;