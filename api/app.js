import express from "express"
import authRoute from "./routes/auth.js"
import { register } from "./controllers/authController.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoute)


app.listen(8800,()=>{
    console.log("running...")
    
})