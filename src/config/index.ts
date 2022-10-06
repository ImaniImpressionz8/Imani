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
    }
};

export default config;
