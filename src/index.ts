import 'express-async-errors';

import compression from 'compression';
import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';

const port = 3030;

const app: Express = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.get('/api', (req, res) => {
    //Line 9
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
