import mongoose from "mongoose"

export const connectDB = async() => {
    try {
        const com = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected ${com.connection.host}`);
    } catch(error) {
        console.log("Error connection to MongoDB", error.message);
        process.exit(1);
    }
};