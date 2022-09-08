import { TRPCError } from "@trpc/server";
import * as argon2 from "argon2";

import { t } from "@src/trpc";
import { loginSchema, registerSchema } from "@src/schemas/auth.schema";

export const authRouter = t.router({
    login: t.procedure.input(loginSchema).mutation(async ({ ctx, input }) => {
        const { email, password } = input;

        const user = await ctx.prisma.user.findFirst({ where: { email } });

        // Verify user exists and email/password combo are valid
        if (!user || !(await argon2.verify(password, user.password))) {
            throw new TRPCError({
                code: "BAD_REQUEST",
                message: "Invalid email or password",
            });
        }

        // Generate tokens
    }),

    register: t.procedure
        .input(registerSchema)
        .mutation(async ({ ctx, input }) => {
            const { email, password, firstName, lastName } = input;

            const exists = await ctx.prisma.user.findFirst({
                where: { email },
            });

            if (exists) {
                throw new TRPCError({
                    code: "CONFLICT",
                    message: "User with specified email already exists.",
                });
            }

            const hashedPassword = await argon2.hash(password);

            const result = await ctx.prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    isAdmin: false,
                    firstName,
                    lastName,
                },
            });

            return {
                status: 201,
                message: "User created successfully.",
                result: result.email,
            };
        }),
});
