import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js'
import jwt from 'jsonwebtoken'

export const register = async (req,res) =>{
    console.log(req.body) 
    const {username,email,password} = req.body
    
    try{
        //Hash the password
        const hashedPassword = bcrypt.hash(password,10)
        console.log(hashedPassword)
        
        const newUser = await prisma.user.create({
            data:{
                username,
                email,
                password
            }
        })
        console.log(newUser)
    
        res.status(201).json({message: "User created successfully"})
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Failed to create"})
    }
}

export const login = async (req,res) =>{
    const {username, password} = req.body

    try {
        //check if the user exists
        const user = await prisma.user.findUnique({
            where:{username:username}
        })
        if(!user){
            return res.status(401).json({message:"Invalid Credentials!"})
        }
        //check if the password is correct
        // const isPasswordValid = await bcrypt.compare(password, user.password)
        console.log(password,user.password)
        if(! password == user.password){
            return res.status(401).json({message:"Invalid Credentials"})
        }
    
        //generate cookie token and send to the user
        const JWT_SECREAT_KEY = "akdhjwkuh2djw122331ej19485"
        const age = 1000 * 60 * 60 * 24 *7;

        const token = jwt.sign ({
            id:user.id
        },JWT_SECREAT_KEY,{expiresIn: age})
        
        res.cookie("token",token,{
            httpOnly:true,
            // secure:true
            maxAge:age,
        })
        .status(200)
        .json({message:"Login Successful"})


    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Failed to login"})
    }
}

export const logout = (req,res) =>{
    res.clearCookie("token").status(200).json({message:"logOutSuccesfully"})
}