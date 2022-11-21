import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';

import {
    deleteOrder,
    getOrder,
    getOrders,
    saveOrder,
    updateOrder
} from '../controller/order';

const uploadDir = path.resolve('public', 'uploads');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e3);
        const formatFilename = (uniqueSuffix + '_' + file.originalname).replace(
            /\s/g,
            ''
        );
        cb(null, formatFilename);
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const orders = await getOrders();

    return res.json({
        success: true,
        message: 'Orders successfully fetched',
        data: orders
    });
});

router.post('/', upload.array('files'), async (req: Request, res: Response) => {
    const { body, files } = req;

    const printFiles = (files as [])?.map(
        (item: { filename: string }) => item.filename
    );

    const { lamination, name, placedBy, priceperunit, sides, unit } = body;

    const product = { name, priceperunit, sides, lamination, unit };

    await saveOrder({
        order: { ...body, printFiles, product }
    });

    return res.redirect(
        `http://localhost:3031/desk/orders?username=${placedBy}`
    );
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
