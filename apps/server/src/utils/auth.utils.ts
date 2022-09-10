import { PrismaClient, User } from "@prisma/client";
import * as crypto from "crypto";

import customConfig from "@src/config/default";
import { signJwt, verifyJwt } from "@src/utils/jwt";

export const generateTokensOnLogin = async (user: User, prisma: PrismaClient) => {
    const access_token = await signJwt({ "sub": user.id }, 'accessTokenPrivateKey', {
        expiresIn: customConfig.accessTokenLifespan,
    });

    const refresh_token = await signJwt({ "sub": user.id, "token": generateToken() }, 'refreshTokenPrivateKey', {
        expiresIn: customConfig.refreshTokenLifespan,
    });

    return { access_token, refresh_token };
}

export const invalidateAllRefreshTokens = async (user: User, prisma: PrismaClient) => {
    // Invalidate all refresh tokens for user
    await prisma.refreshToken.updateMany({
        where: { userId: user.id },
        data: { valid: false },
    })
}

const generateToken = () => {
    return crypto.randomBytes(40).toString('hex');
}