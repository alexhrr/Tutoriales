import {Comentarios} from "../types/comentarios";
import { Tutoriales } from "../types/tutoriales";
import{db} from "../db";
import { RowDataPacket, ResultSetHeader } from "mysql2";

export const findAll = (callback:Function) =>{
    const queryString ="select * from tutoriales";

    db.query(
        queryString,
        (err, result)=>{
            if (err) {callback(err)};

            const rows = <RowDataPacket[]>result;
            const tutoriales: Tutoriales[]= [];

            rows.forEach (row =>{
                const tutoriales: Tutoriales = {
                    tutorial_id: row.tutorial_id,
                    titulo: row.titulo,
                    descripcion: row.descripcion,
                    fecha: row.fecha
                };
            });
            callback(null, tutoriales);

        }
        );
};

export const create = (tutoriales: Tutoriales, callback: Function) => {
    const queryString = "insert into tutoriales (titulo, descripcion, fecha) values (?,?,?);"
    db.query(
        queryString,
        [tutoriales.titulo, tutoriales.descripcion, tutoriales.fecha],
        (err, result)=>{
            if (err){callback(err)}
            const insertId = (<ResultSetHeader>result).insertId;
            callback(null,insertId)
        }
    );
};

