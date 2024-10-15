import express from 'express';
import { createSupplier, getAllSuppliers } from '../controller/supplierController.js';

const supplierRoute = express.Router();

supplierRoute.post('/', createSupplier );
supplierRoute.get('/', getAllSuppliers);


export default supplierRoute