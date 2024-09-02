import mongoose from "mongoose";

const connectDB = async (url) => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(url);  // Removed deprecated options
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to the database", error);
        process.exit(1); // Exit process with failure
    }
}

export default connectDB;

