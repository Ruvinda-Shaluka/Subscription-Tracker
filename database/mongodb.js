import mongoose from 'mongoose';
import {DB_URI, NODE_ENV} from "../config/env.js";

if (!DB_URI) {
    throw new Error('MongoDB URI is missing define the DB_URI in environment variable.');
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to Database in ${NODE_ENV} mode`);
    }catch(err){
        console.log("Error Connecting to the Database: ",err);
        process.exit(1);
    }
}

export default connectToDatabase;