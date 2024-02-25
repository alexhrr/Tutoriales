"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.borrar = exports.update = exports.create = void 0;
const db_1 = require("../db");
const create = (comentarios, callback) => {
    const queryString = "insert into comentarios (tutorial_id, contenido) values (?,?);";
    db_1.db.query(queryString, [comentarios.tutorial_id, comentarios.contenido], (err, result) => {
        if (err) {
            callback(err);
        }
        const insertId = result.insertId;
        callback(null, insertId);
    });
};
exports.create = create;
const update = (comentarios, callback) => {
    const queryString = "update comentarios set contenido = ? where comentario_id =?";
    db_1.db.query(queryString, [comentarios.contenido, comentarios.comentario_id], (err, result) => {
        if (err) {
            callback(err);
        }
        const numUpdate = result.affectedRows;
        callback(null, numUpdate);
    });
};
exports.update = update;
const borrar = (comentarioId, callback) => {
    const queryString = "delete from comentarios where comentario_id=?";
    db_1.db.query(queryString, comentarioId, (err, result) => {
        if (err) {
            callback(err);
        }
        const numDelete = result.affectedRows;
        callback(null, numDelete);
    });
};
exports.borrar = borrar;
const findAll = (tutorial_id, callback) => {
    const queryString = "select * from comentarios where tutorial_id =?";
    db_1.db.query(queryString, tutorial_id, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const comentarios = [];
        rows.forEach(row => {
            const comentario = {
                comentario_id: row.comentario_id,
                tutorial_id: row.tutorial_id,
                contenido: row.contenido
            };
            comentarios.push(comentario);
        });
        callback(null, comentarios);
    });
};
exports.findAll = findAll;
