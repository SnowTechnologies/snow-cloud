import * as z from "zod";

export const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .email({ message: "Invalid email." }),
    password: z
        .string({ required_error: "Password is required." })
        .min(4, { message: "Must be 4 or more characters long." }),
});

export const registerSchema = loginSchema.extend({
    passwordConfirm: z.string({
        required_error: "Please confirm your password",
    }),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
});

export type ILogin = z.infer<typeof loginSchema>;
export type IRegister = z.infer<typeof registerSchema>;
