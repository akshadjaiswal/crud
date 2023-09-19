const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app =express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

mongoose.connect("mongodb://localhost:2701/myDB")
.catch((err)=> console.log(err));

//DB SCHEMA AND MODEL

app.get("/",(req,res)=>{
    res.send("Express is here");
});

app.post("/create",(req,res)=>{
    console.log(req.body);
})

app.listen(3001,function(){
    console.log("Server is running");
});