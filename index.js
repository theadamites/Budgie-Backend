const express = require( 'express')
const cors = require ('cors')
const bodyParser = require( 'body-parser')
const router = require('./routes/router');
const  mongoose= require('mongoose');
require('dotenv/config')
require('dotenv').config();
const schemas=require('./schemas') 




const app = express ()
app.use (bodyParser.json())
app.use (bodyParser.urlencoded ({extended: false}))

const corsOptions = { 
    origin: '*', 
    credentials: true, 
    optionSuccessStatus: 200
}

app.use (cors (corsOptions) )
app.use('/', router)

const dbOptions = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect("mongodb+srv:URI and password ", dbOptions)
.then(()=> console.log("DB connected"))
.catch((err)=> console.log(err))


const port = 5678;
const ip = '172.27.55.228';
const server = app.listen(port, ip, () => {
  console.log(`Server is running on ${ip} : ${port}`);
});

