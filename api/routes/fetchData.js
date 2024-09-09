import express from "express"
import { login,logout,register } from "../controllers/authController.js"
import { fetchAnalyticsData, fetchChartData, postData } from "../controllers/fetchDataController.js"

const router = express.Router()

router.get("/fetchAnalyticsData",fetchAnalyticsData)

router.get("/fetchChartData",fetchChartData)

// router.post("/CRM",fetchCRMData)

// router.post("/eCommerce",logout)

 export default router