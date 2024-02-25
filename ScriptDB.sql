CREATE DATABASE CursoDB;
USE CursoDB;
CREATE TABLE Tutoriales (
tutorial_id INT AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(150) NOT NULL,
descripcion TEXT,
fecha DATE
);

CREATE TABLE Comentarios (
    comentario_id INT AUTO_INCREMENT PRIMARY KEY,
    tutorial_id INT,
    contenido TEXT,
    FOREIGN KEY (tutorial_id) REFERENCES Tutoriales(tutorial_id)
);

INSERT INTO Tutoriales (titulo, descripcion, fecha) 
VALUES ('Introduccion al curso 1', 'Bienvenidos al curso, vamos a explicar los contenidos del curso.', '2023-02-15');

INSERT INTO Tutoriales (titulo, descripcion, fecha) 
VALUES ('Conceptos basicos.', ' En este video tutorial podras aprender los tipos de variables y la logica de programacion.', '2023-03-20');

INSERT INTO Tutoriales (titulo, descripcion, fecha) 
VALUES ('Estructuras de control.', 'En el video de hoy veremos el tema de estructuras de control y crearemos un programa para aplicarlo.', '2023-05-16');

SELECT * FROM tutoriales;

INSERT INTO Comentarios (tutorial_id, contenido)
VALUES 
(1, '¡Muchas gracias! Espero aprender mucho.'),
(1, 'Justo lo que necesitaba, quiero aprender a programar.'),
(2, '¿Cada cuanto vas a subir los tutoriales?.'),
(2, 'Tengo una pregunta sobre el tema del video.'),
(2, 'Gracias por tu esfuerzo, sigue asi!!.'),
(3, 'Excelente curso, apenas para principiantes.'),
(3, 'Me gustaría que hicieras más ejemplos del tema de este video.'),
(3, 'Muy bien explicado... Estos temas son difíciles de entender la primera vez. Muy didáctico!!');