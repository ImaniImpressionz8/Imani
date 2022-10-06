import express, { Request, Response } from 'express';

import { deleteUser, getUser, getUsers, saveUser } from '../controller/user';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const users = await getUsers();

    res.json(users);
});

router.get('/:_id', async (req: Request, res: Response) => {
    const { params } = req;

    const { _id } = params;

    const user = await getUser(_id);

    return res.json(user);
});

router.post('/', async (req: Request, res: Response) => {
    const { query } = req;

    const { department, isAdmin, name } = query;

    const user = await saveUser(
        department as string,
        name as string,
        isAdmin as unknown as boolean
    );

    return res.json(user);
});

router.delete('/', async (req: Request, res: Response) => {
    const { query } = req;

    const { _id } = query;

    const user = await deleteUser(_id as string);

    return res.json(user);
});

export default router;
