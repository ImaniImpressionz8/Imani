type MaybeUndefined<T> = T | undefined;

const defaultTo = (arg1: string, arg2: MaybeUndefined<string>) => {
    return arg2 ? arg2 : arg1;
};

const config = {
    port: defaultTo('4000', process.env.PORT),
    env: process.env.NODE_ENV,
    database: {
        mongodb: {
            uri: defaultTo(
                'mongodb://localhost:27017/printshop',
                process.env.MONGO_URI
            ),
            options: {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        }
    },
    jwt: {
        tokenSecretKey: defaultTo('JWT_SECRET_KEY', process.env.JWT_SECRET_KEY),
        expiresIn: defaultTo('30 minutes', process.env.JWT_EXPIRE_TIME),
        accessTokenExpireTime: defaultTo(
            '1d',
            process.env.JWT_ACCESS_EXPIRE_TIME
        ),
        refreshTokenExpireTime: defaultTo(
            '30d',
            process.env.JWT_REFRESH_EXPIRE_TIME
        ),
        resetPasswordExpiresIn: defaultTo(
            '30 minutes',
            process.env.JWT_RESET_PASSWORD_EXPIRE_TIME
        ),
        verifyEmailExpiresIn: defaultTo(
            '30 minutes',
            process.env.JWT_VERIFY_EMAIL_EXPIRE_TIME
        )
    }
};

export default config;
