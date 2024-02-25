import express, {Request, Response} from "express";
import * as tutorialesModel from "../models/tutoriales";
import { Tutoriales } from "../types/tutoriales";

const tutorialesRouter = express.Router();

tutorialesRouter.get("/", async (req: Request, res: Response)=>{
    tutorialesModel.findAll((err:Error, tutoriales: Tutoriales[])=>{
        if(err){
            return res.status(500).json({"errorMessage" : err.message});
        }
        
        res.status(200).json({"data":tutoriales});
    })
});

export{tutorialesRouter};