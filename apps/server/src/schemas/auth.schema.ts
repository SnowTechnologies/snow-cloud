import * as z from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4),
});

export const registerSchema = loginSchema.extend({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
});

export type ILogin = z.infer<typeof loginSchema>;
export type IRegister = z.infer<typeof registerSchema>;