const express=require("express")
const route =express.Router()
const client=require('../modules/clientShema')



route.get('/',
async(req,res)=>{
    try{
    const clientlist= await client.find()
    res.status(200).json({msg:"get all client",clientlist:clientlist})
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}
)

module.exports=route