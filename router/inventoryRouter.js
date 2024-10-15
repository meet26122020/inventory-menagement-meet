import express from 'express';
import { createItem, deleteItem, exportCSV, getAllItems, getLowStock, importCSV, updateItem } from '../controller/iventoryController.js';
import multer from 'multer';

const invetoryRoute = express.Router();

const upload = multer({ dest: 'uploads' ,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'text/csv') {
            cb(null, true); // Accept only CSV files
        } else {
            cb(new Error('Invalid file type. Only CSV files are allowed!'), false);
        }
    }
});

invetoryRoute.post('/',createItem);
invetoryRoute.get('/',getAllItems );
invetoryRoute.put('/:id',updateItem );
invetoryRoute.delete('/:id',deleteItem );

// Low Stock Route
invetoryRoute.get('/low-stock',getLowStock );


invetoryRoute.get('/export-csv', exportCSV);
invetoryRoute.post('/import-csv', upload.any(),importCSV);

export default invetoryRoute
