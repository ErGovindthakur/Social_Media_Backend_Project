// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";

import connectDB from "./db/db.js";


dotenv.config({path:'./env'})
connectDB()





/*
import express from "express"

const app = new express()

// Writing our iffe function
(async() => {
     try{
         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

         app.on("error", (error) => {
          console.log("Error : ", error)
          throw error
         })

         app.listen(process.env.PORT, () => {
          console.log(`App is listening on PORT ${process.env.PORT}`)
         })
     }
     catch(err){
          console.log("ERR",err.message)
          throw err
     }
})()
*/
