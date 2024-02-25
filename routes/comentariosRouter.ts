import express, { Request, Response} from "express";
import * as comentariosModel from "../models/comentarios";
import { Comentarios } from "../types/comentarios";

const comentariosRouter = express.Router();

comentariosRouter.post("/", async(req: Request, res: Response) =>{
    const newComentario = req.body;
    comentariosModel.create(newComentario, (err: Error, comentarioId:Comentarios)=>{
        if(err){
            return res.status(500).json({"errorMessage": err.message});
        }
        res.status(200).json({"ComentarioId":comentarioId})
    });
});

comentariosRouter.put("/", async(req:Request, res:Response)=>{
    const comentario : Comentarios= req.body;
    comentariosModel.update(comentario,(err:Error, numUpdate:number)=>{
        if(err){
            return res.status(500).json({"errorMessage": err.message});
        }
        res.status(200).json({"Record Updade": numUpdate})
    })
})

comentariosRouter.delete("/:id", async(req: Request, res:Response)=>{
    const comentario=Number(req.params.id);
    comentariosModel.borrar(comentario,(err:Error, numDelete: number)=>{
        if(err){
            return res.status(500).json({"errorMessage": err.message});
        }

        res.status(200).json({"record Deleted": numDelete})

    })
})

comentariosRouter.get("/:id", async(req:Request, res:Response)=>{
    const tutorial_id= Number (req.params.id);
    comentariosModel.findAll(tutorial_id,(err:Error,comentario:Comentarios)=>{
        if(err){
            return res.status(500).json({"errorMessage":err.message});
        }

        res.status(200).json({data:comentario})
    });
});

export {comentariosRouter};
