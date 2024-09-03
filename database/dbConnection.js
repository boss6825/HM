import mongoose from "mongoose";
export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM"
    }).then(()=> {
        console.log("Connected to database MongoDB");
    }).catch(err=>{
        console.log(`some error occurred while connecting to database: ${err}`);
    })
}