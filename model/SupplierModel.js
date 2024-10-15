import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    supplier_name: { type: String, required: true },   // Supplier's name
    contact_email: { type: String, required: true },   // Supplier's email
    contact_phone: { type: String, required: true },   // Supplier's phone number
    address: {                                         // Address information
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: String }
    },
    company_name: { type: String },                    // Company name
});

const Supplier = mongoose.model('Supplier', supplierSchema);
export default Supplier;