const customConfig: {
    port: number;
    accessTokenLifespan: string;
    refreshTokenLifespan: string;
    origin: string;
    accessTokenPrivateKey: string;
    refreshTokenPrivateKey: string;
    accessTokenPublicKey: string;
    refreshTokenPublicKey: string;
} = {
    port: 4000,

    accessTokenLifespan: "15m", // 15 Minutes
    refreshTokenLifespan: "7d", // 1 Week

    origin: "http://localhost:4000",

    accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY as string,
    accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY as string,
    refreshTokenPrivateKey: process.env.REFRESH_TOKEN_PRIVATE_KEY as string,
    refreshTokenPublicKey: process.env.REFRESH_TOKEN_PUBLIC_KEY as string,
};

export default customConfig;
