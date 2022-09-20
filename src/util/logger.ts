import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
    format: format.combine(
        process.env.NODE_ENV === 'development'
            ? format.colorize()
            : format.uncolorize(),
        format.splat(),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(
            ({
                level,
                message,
                timestamp
            }: {
                level: string;
                message: string;
                timestamp?: string;
            }) => `${timestamp} [${level}]: ${message}`
        )
    ),
    transports: [
        new transports.Console({ stderrLevels: ['error'] }),
        new transports.File({
            dirname: 'logs',
            filename: 'app.log',
            level: process.env.NODE_ENV === 'development' ? 'debug' : 'info'
        })
    ],
    exceptionHandlers: [
        new transports.Console({ stderrLevels: ['error'] }),
        new transports.File({
            dirname: 'logs',
            filename: 'app.log',
            level: process.env.NODE_ENV === 'development' ? 'debug' : 'info'
        })
    ]
});

export default logger;
