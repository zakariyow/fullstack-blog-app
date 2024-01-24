import mongoose from "mongoose";

import { dbUrl } from "./config.js";
import chalk from "chalk";

const connectDB = async () => {
    try{
        await mongoose.connect(dbUrl,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`${chalk.green.bold('Connected')} to the datBase ✅`)

    } catch (err){
        console.log(`${chalk.red.bold('Error')}connecting to database`, err);
        process.exit(1)
    }
}

export default connectDB;