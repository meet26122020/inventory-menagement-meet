import { Parser } from "json2csv";
import Inventory from "../model/inventoryModel.js";
import Supplier from "../model/SupplierModel.js";
import csv from 'csv-parser'
import fs from 'fs'



// Create new inventory item
export const createItem = async (req, res) => {
    try {
        const {product_name, product_description ,product_price ,quantity, supplier} = req.body
        if (!product_name ||!product_price ||!quantity ||!supplier) {
            return res.status(400).send('All fields are required');
        }
        const oldSupplier = await Supplier.findById(req.body.supplier);
        if (!oldSupplier) return res.status(404).send('Supplier not found');

        const newItem = new Inventory(req.body);
        await newItem.save();
        res.status(201).json({message: 'Item saved successfully', data: newItem});
    } catch (err) {
        res.status(400).json({
            message: 'Failed to save item',
            error: err.message
        });
    }
};

// Get all inventory items
export const getAllItems = async (req, res) => {
    try {
        const items = await Inventory.find().populate('supplier');
        res.status(200).send(items);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update an inventory item
export const updateItem = async (req, res) => {
    try {
        const {id} = req.params
        if (!id) return res.status(400).send('Invalid ID');
        const updatedItem = await Inventory.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedItem) return res.status(404).send('Somthing Went Wronge');

        res.status(200).json({
            message: 'Item updated successfully',
            data: updatedItem
        });
    } catch (err) {
        res.status(400).json({
            message: 'Failed to update item',
            error: err.message
        });
    }
};

// Delete an inventory item
export const deleteItem = async (req, res) => {
    try {
        const {id} = req.params
        if (!id) return res.status(400).send('Invalid ID');
        const result = await Inventory.findByIdAndDelete(id);
        if (!result) return res.status(404).send('Item not found');
        res.status(200).send({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to delete item',
            error: err.message
        });
    }
};


// Get low stock items
export const getLowStock = async (req, res) => {
    const threshold = req.query.threshold || 5; // Default threshold
    try {
        const lowStockItems = await Inventory.find({ quantity: { $lt: threshold } });
        res.status(200).send(lowStockItems);
    } catch (err) {
        res.status(500).send(err);
    }
};

// CSV Export
export const exportCSV = async (req, res) => {
    try {
        const items = await Inventory.find().populate('supplier');
        const csvFields = [
            'product_name',
            'product_description',
            'product_price',
            'quantity',
            'supplier',];
        const parser = new Parser({ fields: csvFields });
        const csvData = parser.parse(items);
        res.header('Content-Type', 'text/csv');
        res.attachment('inventory.csv');
        res.send(csvData);
    } catch (err) {
        res.status(500).send(err);
    }
};

// CSV Import
export const importCSV = (req, res) => {
    const filePath = req.files[0].path;
    const results = [];
    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data) )
        .on('end', async () => {
            try {
                await Inventory.insertMany(results);
                res.status(200).send({ message: 'CSV imported successfully!' });
            } catch (err) {
                res.status(500).send(err);
            }
        });
};