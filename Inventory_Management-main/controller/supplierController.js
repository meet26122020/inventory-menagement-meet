import Supplier from "../model/SupplierModel.js";

export const createSupplier = async (req, res) => {
    try {
        const {supplier_name, contact_email ,contact_phone, address ,company_name} = req.body
        if(!supplier_name || !contact_email || !contact_phone){
           res.status(404).send({message:"Missing Dependency"})
        }
        const newSupplier = new Supplier(req.body);
        await newSupplier.save();
        res.status(201).json({message:"New Supplier", data:newSupplier});
    } catch (err) {
        res.status(400).send(err);
    }
};

// Get all suppliers
export const getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.status(200).send(suppliers);
    } catch (err) {
        res.status(500).send(err);
    }
};