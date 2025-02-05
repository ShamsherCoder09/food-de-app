import mongoose from "mongoose";
import 'dotenv/config';

export const connectDB = async () => {
    // console.log("MONGODB_URL:", process.env.MONGODB_URL); // Debugging line

    if (!process.env.MONGODB_URL) {
        throw new Error("MONGODB_URL is not defined. Check your .env file.");
    }

    await mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log("✅ DB Connected Successfully"))
        .catch((error) => {
            console.error("❌ Error connecting to MongoDB:", error);
        });
};


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.