import express, { Request, Response } from 'express';

import {
    deleteProduct,
    deleteProductPrice,
    getDepartments,
    getProduct,
    getProducts,
    saveProduct,
    updateProduct
} from '../controller/product';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const products = await getProducts();

    return res.json({
        success: true,
        message: 'Products successfully fetched',
        data: products
    });
});

router.get('/departments', async (req: Request, res: Response) => {
    const departments = await getDepartments();

    return res.json({
        success: true,
        message: 'Departments successfully fetched',
        data: departments
    });
});

router.post('/', async (req: Request, res: Response) => {
    const { body } = req;

    const { department, minorderqty, name } = body;

    const product = await saveProduct({ name, department, minorderqty });

    return res.json({
        success: true,
        message: 'Order successfully saved',
        data: product
    });
});

router.put('/:_id', async (req: Request, res: Response) => {
    const { body, params } = req;

    const { _id } = params;
    const { price } = body;

    const product = await updateProduct({
        _id,
        price
    });

    return res.json({
        success: true,
        message: 'Product price successfully added',
        data: product
    });
});

router.patch('/:_id', async (req: Request, res: Response) => {
    const { params, query } = req;

    const { _id } = params;
    const { priceId } = query;

    const product = await deleteProductPrice({
        _id,
        priceId: priceId as string
    });

    return res.json({
        success: true,
        message: 'Product price successfully added',
        data: product
    });
});

router.get('/:_id', async (req: Request, res: Response) => {
    const { params } = req;

    const { _id } = params;

    const user = await getProduct({ _id });

    return res.json({
        success: true,
        message: 'User successfully retrieved',
        data: user
    });
});

router.delete('/', async (req: Request, res: Response) => {
    const { query } = req;

    const { _id } = query;

    const user = await deleteProduct({ _id: _id as string });

    return res.json({
        success: true,
        message: 'User successfully deleted',
        data: user
    });
});

export default router;
