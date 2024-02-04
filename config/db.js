import mongoose from "mongoose";
import colors from "colors";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to database ${conn.connection.host}`.bgCyan.black);
    } catch (error) {
        console.log(`Error in database ${error}`.bgRed.white);
    }
}

export default connectDB;