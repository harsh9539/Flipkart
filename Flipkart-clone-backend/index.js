import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { Connection } from './DataBase/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router);

app.get("/",(req,res)=>{
    res.send("Success");
})
const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);
app.listen(PORT,()=>console.log(`server is running on port ${PORT} `))
DefaultData();