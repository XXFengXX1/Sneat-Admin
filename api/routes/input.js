import express from "express"
import { postData,fetchAnalyticsData } from "../controllers/fetchDataController.js"

const router = express.Router()

router.get("/fetchAnalyticsData",fetchAnalyticsData)

 export default router