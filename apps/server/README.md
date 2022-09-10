# Snow Cloud Server

Snow Cloud Server provides all server-side functionality for the Snow Cloud application.

## About

This directory contains the source for the Snow Cloud Backend Server and is managed by [Turborepo](https://turborepo.org/).

The server (backend) is built mainly using [Fastify](https://www.fastify.io/), [tRPC](https://trpc.io/), and [Prisma](https://www.prisma.io/). Other packages used can be found in the package.json file.

## Authentication Mechanism

Snow Cloud uses a token-based authentication system. On login, this server return an access-token and refresh-token. The access-token only provides access to protected resources for 15 minutes. After the access-token expires, the client will attempt to fetch a new token by using the refresh-token, which has a much longer lifespan. To prevent the possibility of account compromise due to a stolen refresh-token, this system implements refresh-token rotation and automatic refresh-token reuse detection, as outlined in [this blog post](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/) by the team at Auth0.