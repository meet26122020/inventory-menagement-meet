import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://meetkanpariya00:tT1v9BqrrKfDFrNl@cluster0.7zgqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MongoDB Connect");
    } catch (error) {
        console.log("Failed to connect");
    }
}