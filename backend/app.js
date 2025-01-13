const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path =require('path');
const connectDatabase = require('./config/connectDatabase');
const products =require('./routes/products');
const orders = require('./routes/order');
const cors = require('cors');
dotenv.config({path:path.join(__dirname,'config','config.env')})

connectDatabase();

app.use(express.json());
app.use(cors());
app.use('/api/v1',products);
app.use('/api/v1',orders);

app.listen(process.env.PORT, ()=>{
    console.log(`this app is running on ${process.env.PORT} port in ${process.env.NODE_ENV}`)
})


