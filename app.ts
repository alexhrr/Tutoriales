import * as dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";
import {tutorialesRouter} from "./routes/tutorialesRouter";
import {db} from "./db";
import { comentariosRouter } from "./routes/comentariosRouter";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use("/tutoriales", tutorialesRouter);
app.use("/comentarios", comentariosRouter);

db.connect((err)=>{
    if (err){
        console.log("Database connection error");
    } else{
        console.log("Database Conected");
    }
});

app.listen(process.env.PORT, ()=> {
    console.log("Node server started running");
    console.log(`Go to http://${process.env.HOST}:${process.env.PORT}`);
});