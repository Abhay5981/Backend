// require('dotenv').config({path: './env'})


// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// 
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: "./env",
})




connectDB()













// method one  by using effie

// 
// import express from  "express"

// const app = express()

// (async()=> {         -->why we use async await because our database is in another continent
//     try {
//         await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME }}`)
//         app.on("error", (error)=>{
//             console.error("Error:", error);
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
            
//         })
//     } catch (error) {
//         console.error('ERROR', error)
//         throw err
//     }
// })()

