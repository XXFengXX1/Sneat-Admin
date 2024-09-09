import express from "express"
import authRoute from "./routes/auth.js"
import cookieParser from "cookie-parser"
import cors from 'cors'
import fetchRoute from './routes/fetchData.js'
import inputRoute from './routes/input.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use("/api/input",inputRoute)
app.use("/api/auth", authRoute)
app.use("/api/fetch",fetchRoute)
// app.use("/api/input",inputRoute)

app.listen(8800,()=>{
    console.log("running...")
})