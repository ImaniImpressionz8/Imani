import 'express-async-errors';

import compression from 'compression';
import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';

import createMongodbConnection from './controller/db';
import { ordersRouter, productsRouter, usersRouter } from './routes';
import logger from './util/logger';

const port = 3030;

const app: Express = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(express.static('public'));

createMongodbConnection().catch((err) => logger.error(err));

app.use('/orders', ordersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.get('/api', (req, res) => {
    res.json({ user_agent: req.headers['user-agent'] });
});
app.get('/', (req: Request, res: Response) => {
    return res.send(
        `<p style="font-size:12px;">Hello World, ${req.headers['user-agent']}</p>`
    );
});

app.listen(process.env.PORT || port, () => {
    return;
});
