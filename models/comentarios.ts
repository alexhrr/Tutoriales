import {db} from "../db";
import { RowDataPacket, ResultSetHeader } from "mysql2";
import { Comentarios } from "../types/comentarios";
import { Tutoriales } from "../types/tutoriales";

export const create = (comentarios: Comentarios, callback: Function) => {
    const queryString = "insert into comentarios (tutorial_id, contenido) values (?,?);"
    db.query(
        queryString,
        [comentarios.tutorial_id, comentarios.contenido],
        (err, result)=>{
            if (err){callback(err)}
            const insertId = (<ResultSetHeader>result).insertId;
            callback(null,insertId)
        }
    );
};

export const update =( comentarios: Comentarios, callback: Function) =>{
    const queryString = "update comentarios set contenido = ? where comentario_id =?"
    db.query(
        queryString,
        [comentarios.contenido, comentarios.comentario_id],
        (err, result) => {
            if (err){callback(err);}

            const numUpdate = (<ResultSetHeader>result).affectedRows;
            callback(null, numUpdate);
        }
    );
};

export const borrar = (comentarioId: Number, callback:Function)=>{
    const queryString = "delete from comentarios where comentario_id=?";

    db.query(
        queryString,
        comentarioId,
        (err, result)=>{
            if(err) {callback(err)}

            const numDelete = (<ResultSetHeader>result).affectedRows;
            callback(null, numDelete)
        }
    );
};


