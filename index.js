import express from 'express'
import cors from 'cors'
import connectDb from "./Database/dbconfig.js";
import empRouter from './Routers/employee.router.js';
import dotenv from 'dotenv'

dotenv.config()

const port=process.env.PORT


const app = express()

app.use(cors())

app.use(express.json())

app.use('/api',empRouter)

connectDb()



app.listen(port, () =>{
    console.log("my app running in",port);
})