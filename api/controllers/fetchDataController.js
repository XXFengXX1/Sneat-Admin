import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js'
import jwt from 'jsonwebtoken'

export const fetchChartData = async (req,res) =>{
    try{
        //get the name chart
        const chartName = req.query.chartName

        const chartData = await prisma.chartData.findMany({
            where: {
                name:`${chartName}`,
                ownerId:"66dda17ef767053c64ce0c30"
            }
        })

        res.status(201).json({chartData})
        
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Failed to fetch"})
    }
}
export const postData = async(req,res) => {
    console.log(req.body) 
    const {name,data,ownerId} = req.body
    try{
        const newChartData = await prisma.chartData.create({
            data:{
                name:name,
                data:data,
                ownerId:ownerId
            }
        })
        console.log(newChartData)
    
        res.status(201).json({message: "data posted successfully"})
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Failed to post data"})
    }
}

export const createDataPage = async (req,res) =>{
    console.log(req.body) 
    const {order,sales,salesDifference,payments,paymentsDifference,ProfitReport,ProfitReportDifference,totalOrder,totalSales,orderStatisticWeekly,electronic,fashion,decor,sports,totalIncome,incomeDifference} = req.body
    try{
        const newAnalyticsData = await prisma.AnalyticsData.create({
            data:{
                order:order,
                sales:sales,
                salesDifference:salesDifference,
                payments:payments,
                paymentsDifference:paymentsDifference,
                ProfitReport:ProfitReport,
                ProfitReportDifference:ProfitReportDifference,
                totalOrder:totalOrder,
                totalSales:totalSales,
                orderStatisticWeekly:orderStatisticWeekly,
                electronic:electronic,
                fashion:fashion,
                decor:decor,
                sports:sports,
                totalIncome:totalIncome,
                incomeDifference:incomeDifference
            }
        })
        console.log(newAnalyticsData)
    
        res.status(201).json({message: "data created successfully"})
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Failed to create data"})
    }
}

export const fetchAnalyticsData = async(req,res) =>{

    try{
        const analyticsData = await prisma.analyticsData.findUnique({
           where:{id : "66dda17ef767053c64ce0c30"}
        })
        console.log(analyticsData)
    
        res.status(201).json({analyticsData})
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Failed to fetch data"})
    }
}