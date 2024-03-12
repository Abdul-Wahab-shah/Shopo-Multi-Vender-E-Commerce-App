const express=require('express');
const ErrorHandler = require('./utils/ErrorHandler');
const app=express()
const cookieParser =require("cookie-parser")
const bodyParser=require("body-parser")
const fileUpload = require('express-fileupload');
const cors=require("cors")

app.use(express.json())
app.use(cookieParser)
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload({useTempFiles:true}));
app.use("/",express.static("uploads")); 


// config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
};


// import routes
const user = require("../backend/controller/user")
app.use("/api/v2/user",user);



// it's for ErrorHandling

app.use(ErrorHandler)

module.exports=app;