require ('dotenv').config();
const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const express=require('express');
const app =express();

const bodyParser = require('body-parser');
const cors = require('cors');
const {HoldingsModel}=require('./model/HoldingsModel')
const {PositionsModel} =require('./model/PositionsModel.js')

app.use(cors());
app.use(bodyParser.json());



app.get('/allHoldings',async(req,res)=>{
    let allHoldings=await HoldingsModel.find({})
    res.json(allHoldings);
})
app.get('/allPositions',async(req,res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
})
const mongoose = require('mongoose');
const PORT=process.env.PORT||3002;
const url = process.env.MONGO_URL;


app.listen(PORT,()=>{
    console.log('Server running on port 3002');
    mongoose.connect(url)
    
})