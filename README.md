# Snow Cloud

Snow Cloud is a free and open-source file server and management system. Snow Cloud works very similarly to other cloud file providers, like iCloud, OneDrive, or Google Drive. Snow Cloud is distributed under the AGPL v3 license.

## About

The monorepo for Snow Cloud is configured and managed by [Turborepo](https://turborepo.org/).

The client (frontend) site is built using [Next.js](https://nextjs.org) and [Tailwind](https://tailwindcss.com/), and is deployed through [Vercel](https://vercel.com/). Icons from [Feather Icons](https://feathericons.com/) (react-feather) are used.

The server (backend) is built using [Fastify](https://www.fastify.io/) and [Prisma](https://www.prisma.io/).

## Languages

 [TypeScript](https://www.typescriptlang.org/)
 
 [TSX](https://www.typescriptlang.org/docs/handbook/jsx.html) + (HTML & CSS)

***

# Turborepo Info

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `client`: A [Next.js](https://nextjs.org) app
- `server`: A [Fastify](https://www.fastify.io/) api server
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools setup:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd snow-cloud
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd snow-cloud
npm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd snow-cloud
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links (Turborepo Docs)

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
