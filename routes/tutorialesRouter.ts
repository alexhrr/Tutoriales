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


tutorialesRouter.post("/", async(req: Request, res:Response)=>{
    const newTutorial: Tutoriales=req.body;
    tutorialesModel.create(newTutorial,(err: Error, tutorialId:number)=>{
        if(err){
            return res.status(500).json({"errorMessage":err.message});
        }
        res.status(500).json({"TutorialId" : tutorialId})
    })
})

export{tutorialesRouter};