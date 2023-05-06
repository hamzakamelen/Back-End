// Node JS k basic Concepts


// console.log("Hello World") //node server.js (for run)

const fs= require('fs')

// ====== Read DIrectory === 
// fs.readdir('./',(err,dir)=>{
//     console.log(dir)
// })

// === Read File =====
// fs.readFile('./abc.txt',"utf-8",(err,file)=>{
//     console.log(file)
// })

// ===== WRite File ======
// fs.writeFile('./abc.txt',"Hamza Kamelen here",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Write Done")
//     }
// })

// ====== Append File=====
// fs.appendFile('./abc.txt',"\n New Text from Hamza",(err)=>{
//     if(err){
//                 console.log(err)
//             }else{
//                 console.log(" Appended Done")
//             }
// })
let a=[
    {
        id:01,
        name:"Hamza"
    },{
        id:02,
        name:"Talha"
    },{
        id:03,
        name:"Anas"
    }
]
// const http = require('http')
// const server = http.createServer((req,res)=>{
    // console.log("CHal gya")
    // console.log("Url",req.url)
    // if(req.url=="/hamzakamelen"){
    //     res.write(JSON.stringify(a))
    // }else if(req.url=="/hamza"){
    //     res.write(JSON.stringify(a))
    // }
    // -------------------------------
    
//     if(req.url=="/hamzakamelen"){
//         if(req.method=="GET"){
//             res.write(JSON.stringify(a))
//         } else if(req.method=="POST"){
//             res.write(JSON.stringify(req.body))
//         }
//     }
//     res.end()
// })
// server.listen(5000);

//Postman download krna h usmain humn sari API test krskty h
//Thunder Client in VS Extension

// ---------------- Ye Sab Node ka tha ab hum express krengy-----------------------------

// for middle ware
//npm init
// enter krty rhna
// npm i express
// npm start

const express = require("express")
const app = express()
// Middle ware
app.use(express.json());
// ------------------
app.get("/hamza",(req,res)=>{
    // yahan bar bar server band krny ki zrurat nahi y khud krlega handle
    res.send(JSON.stringify(a))
})
app.post("/hamza",(req,res)=>{
    res.send(JSON.stringify(req.body))
})
app.put("/hamza",(req,res)=>{})
app.delete("/hamza",(req,res)=>{})

app.listen(5000)