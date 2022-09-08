import fastify from "fastify";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";

import { createContext } from "@src/trpc/context";
import { appRouter } from "@src/router";

const server = fastify({
    maxParamLength: 5000,
});

server.register(fastifyTRPCPlugin, {
    prefix: "/v1",
    trpcOptions: { router: appRouter, createContext },
});

(async () => {
    try {
        await server.listen({ port: 4000 });
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
})();
