import mongoose from "mongoose";


const inventorySchema = new mongoose.Schema({
    product_name: { type: String, required: true },  // Name of the product
    product_description: { type: String },           // Description of the product
    product_price: { type: Number, required: true }, // Price of the product (current rate)
    quantity: { type: Number, required: true },      // Quantity of items available
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' } // Reference to supplier
});

const Inventory = mongoose.model('Inventory', inventorySchema);
export default Inventory;