"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.findAll = void 0;
const db_1 = require("../db");
const findAll = (callback) => {
    const queryString = "select * from tutoriales";
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        ;
        const rows = result;
        const tutoriales = [];
        rows.forEach(row => {
            const tutorial = {
                tutorial_id: row.tutorial_id,
                titulo: row.titulo,
                descripcion: row.descripcion,
                fecha: row.fecha
            };
            tutoriales.push(tutorial);
        });
        callback(null, tutoriales);
    });
};
exports.findAll = findAll;
const create = (tutoriales, callback) => {
    const queryString = "insert into tutoriales (titulo, descripcion, fecha) values (?,?,?);";
    db_1.db.query(queryString, [tutoriales.titulo, tutoriales.descripcion, tutoriales.fecha], (err, result) => {
        if (err) {
            callback(err);
        }
        const insertId = result.insertId;
        callback(null, insertId);
    });
};
exports.create = create;
