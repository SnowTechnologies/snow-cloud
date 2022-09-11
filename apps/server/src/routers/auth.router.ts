import { TRPCError } from "@trpc/server";
import * as argon2 from "argon2";

import { t } from "@src/trpc";
import { loginSchema, registerSchema } from "@src/schemas/auth.schema";
import { generateTokensOnLogin } from "@src/utils/auth.utils";

export const authRouter = t.router({
    login: t.procedure.input(loginSchema).mutation(async ({ ctx, input }) => {
        const { email, password } = input;

        const user = await ctx.prisma.user.findFirst({ where: { email: email } });

        // Verify user exists and email/password combo are valid
        if (!user || !(await argon2.verify(user.password, password))) {
            throw new TRPCError({
                code: "BAD_REQUEST",
                message: "Invalid email or password",
            });
        }

        // Generate new tokens
        const { access_token, refresh_token } = await generateTokensOnLogin(user, ctx.prisma);

        return {
            status: 200,
            message: "Login successful.",
            access_token,
            refresh_token,
        }
    }),

    register: t.procedure
        .input(registerSchema)
        .mutation(async ({ ctx, input }) => {
            const { email, password, passwordConfirm, firstName, lastName } = input;

            // Check for existing accounts with same email
            const exists = await ctx.prisma.user.findFirst({
                where: { email },
            });

            if (exists) {
                throw new TRPCError({
                    code: "CONFLICT",
                    message: "User with specified email already exists.",
                });
            }

            // Check if passwords match
            if (password !== passwordConfirm) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: "Passwords do not match.",
                });
            }

            // Input data passed validation, create user
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
