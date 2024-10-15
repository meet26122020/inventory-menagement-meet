import mongoose from "mongoose";

export const ConnectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB Connect");
    } catch (error) {
        console.log("Failed to connect");
    }
}