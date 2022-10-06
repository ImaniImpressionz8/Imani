import express, { Request, Response } from 'express';

import { deleteUser, getUser, getUsers, saveUser } from '../controller/user';

const router = express.Router();

router.get('/login', async (req: Request, res: Response) => {
    const { query } = req;

    const { password, username } = query;

    const user = await getUser(username as string);

    // eslint-disable-next-line security/detect-possible-timing-attacks
    if (user?.password === password)
        return res.json({
            data: user,
            success: true,
            message: 'User successfully logged in'
        });

    return res.json({
        data: null,
        success: false,
        message: 'Incorrect user credentials'
    });
});

router.get('/', async (req: Request, res: Response) => {
    const users = await getUsers();

    return res.json(users);
});

router.get('/:_id', async (req: Request, res: Response) => {
    const { params } = req;

    const { username } = params;

    const user = await getUser(username);

    return res.json(user);
});

router.post('/', async (req: Request, res: Response) => {
    const { query } = req;

    const { department, firstname, isAdmin, password, username } = query;

    const user = await saveUser(
        department as string,
        firstname as string,
        username as string,
        password as string,
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
