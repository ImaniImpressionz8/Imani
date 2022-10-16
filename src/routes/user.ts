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
            success: true,
            message: 'User successfully logged in',
            data: user
        });

    return res.json({
        success: false,
        message: 'Incorrect user credentials',
        data: null
    });
});

router.get('/', async (req: Request, res: Response) => {
    const users = await getUsers();

    return res.json({
        success: true,
        message: 'Users successful fetched',
        data: users
    });
});

router.get('/:username', async (req: Request, res: Response) => {
    const { params } = req;

    const { username } = params;

    const user = await getUser(username);

    return res.json({
        success: true,
        message: 'User successful fetched',
        data: user
    });
});

router.post('/', async (req: Request, res: Response) => {
    const { body } = req;

    const { department, firstname, isAdmin, password, username } = body;

    const user = await saveUser(
        department,
        firstname,
        username,
        password,
        isAdmin
    );

    return res.json({
        success: true,
        message: 'User successful saved',
        data: user
    });
});

router.delete('/', async (req: Request, res: Response) => {
    const { query } = req;

    const { _id } = query;

    const user = await deleteUser(_id as string);

    return res.json({
        success: true,
        message: 'User successful deleted',
        data: user
    });
});

export default router;
