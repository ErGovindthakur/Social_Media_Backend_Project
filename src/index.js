// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";

import connectDB from "./db/db.js";
import { app } from "./app.js";

const port = process.env.PORT || 7000;

dotenv.config({path:'./env'})
connectDB()
.then(() => {
     app.listen(port, ()=>{
          console.log(`Server is running at port ${port}`)
     })
})
.catch((err) => {
     console.log("Mongo db connection failed !!")
})
