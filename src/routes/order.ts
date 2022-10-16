import express, { Request, Response } from 'express';

import {
    deleteOrder,
    getOrder,
    getOrders,
    saveOrder,
    updateOrder
} from '../controller/order';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const order = await getOrders();

    return res.json({
        success: true,
        message: 'Orders successfully fetched',
        data: order
    });
});

router.post('/', async (req: Request, res: Response) => {
    const { body } = req;

    const order = await saveOrder({
        order: { ...body }
    });

    return res.json({
        success: true,
        message: 'Order successfully saved',
        data: order
    });
});

router.patch('/:_id', async (req: Request, res: Response) => {
    const { body, params } = req;

    const { _id } = params;

    const order = await updateOrder({ _id, body });

    return res.json({
        success: true,
        message: 'Order successfully update',
        data: order
    });
});

router.get('/:_id', async (req: Request, res: Response) => {
    const { params } = req;

    const { _id } = params;

    const order = await getOrder(_id);

    return res.json({
        success: true,
        message: 'Order successfully fetched',
        data: order
    });
});

router.delete('/', async (req: Request, res: Response) => {
    const { query } = req;

    const { _id } = query;

    const order = await deleteOrder(_id as string);

    return res.json({
        success: true,
        message: 'Order successfully deleted',
        data: order
    });
});

export default router;
