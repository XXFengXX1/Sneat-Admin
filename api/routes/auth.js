import express from "express"
import { login,logout,register } from "../controllers/authController.js"
import { createDataPage, postData,fetchAnalyticsData } from "../controllers/fetchDataController.js"

const router = express.Router()

router.post("/register",postData)

router.post("/createData",createDataPage)

router.get("/fetchAnalyticsData",fetchAnalyticsData)

export default router