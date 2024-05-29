import express from 'express'
import { ProductControllers } from './Product.controller';


const router = express.Router();

router.post( '/create-product', ProductControllers.createProduct );

router.get( '/', ProductControllers.getAllProducts );

router.get( '/:productId', ProductControllers.getSingleProduct );

export const ProductRoutes = router;

