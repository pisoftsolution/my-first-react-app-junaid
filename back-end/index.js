const express= require("express");  
const mongoose =require("mongoose");
const authroute  =require('./routes/auth');
const sendgridRoute  =require('./routes/sendgrid');
const twilioRoute = require ('./routes/twilio');
const blogsRoute = require ('./routes/blogs');
const jwt = require("jsonwebtoken"); 
const cors = require('cors')

const app=express();

const dbURI="mongodb://localhost/authentication";

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/api/auth',authroute);
app.use('/api/sendgrid',sendgridRoute);
app.use('/api/twilio',twilioRoute);
app.use('/api/Blogs',blogsRoute);

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true});
const db= mongoose.connection;

db.on("error",(err)=>{console.error(err)})
db.once("open",()=>{console.log("Mongodb connected successfully")});

app.listen(8091,()=>{
    console.log("server started 8091");
})