create schema base;
USE base;

CREATE TABLE usuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR(50) NOT NULL,
mail VARCHAR(50) NOT NULL UNIQUE,
contrasena VARCHAR(200),
fecha date,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
idUsuario INT UNSIGNED,
nombreArchivoFoto VARCHAR(50),
nombre VARCHAR(50),
descripcion VARCHAR(100),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);
SHOW TABLES;

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
idUsuario INT UNSIGNED,
texto VARCHAR(200) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

INSERT INTO usuarios (usuario, mail, contrasena, fecha) VALUES
("lorenzo", "lorenzo@ejemplo.com", "1234", '2000-01-01'),
("camila", "camila@ejemplo.com", "abcd", '1999-05-10'),
("mateo", "mateo@ejemplo.com", "5678", '1998-07-21'),
("valentina", "valentina@ejemplo.com", "qwerty", '2001-02-15'),
("tomas", "tomas@ejemplo.com", "pass123", '2002-12-25'),
("julieta", "julieta@ejemplo.com", "clave", '2000-06-18'),
("lucia", "lucia@ejemplo.com", "lucia1", '2003-04-09'),
("ignacio", "ignacio@ejemplo.com", "nacho", '1997-11-30'),
("martina", "martina@ejemplo.com", "marti", '1996-03-20'),
("sofia", "sofia@ejemplo.com", "sofi", '2001-08-12');


INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (1, "Adeportivos.webp", "Anteojos de sol clásicos", "Estilo vintage, lentes oscuros, marco negro.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (2, "Adesol.webp", "Anteojos rectangulares de lectura", "Diseño moderno, livianos, marco metálico.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (3, "Apolarizados.webp", "Anteojos redondos retro", "Ideal para estilo urbano, marco dorado.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (4, "ARectangulares.webp", "Anteojos deportivos UV400", "Alta protección solar, aptos para running y bici.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (5, "ARedondos.jpg", "Anteojos de sol polarizados", "Reducción de reflejos, lentes polarizados.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (6, "anteojosazul.webp", "Anteojos para pantalla azul", "Filtran luz azul, ideales para computadoras.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (7, "anteojosover.webp", "Anteojos fashion oversize", "Look llamativo, marco grande y oscuro.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (8, "anteojosredondos.webp", "Anteojos redondos transparentes", "Lentes sin aumento, estilo intelectual.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (9, "anteojosclip.webp", "Anteojos con clip solar", "Diseño práctico, lentes de sol removibles.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (10, "anteojoslivianos.webp", "Anteojos livianos unisex", "Marco de acetato, confort y ligereza.");



INSERT INTO comentarios (idUsuario, texto) VALUES 
(2, "EL polarizado increíble"),
(3, "Son de otro planeta"),
(4, "Lo recomiendo, muy buena relación calidad-precio"),
(5, "Los uso y ya no me duele tanto la cabeza"),
(6, "Muy lindos y funcionales"),
(7, "Me vinieron bárbaro"),
(8, "Los recomiendo fuertemente"),
(9, "Muy lindos, ideal para salir de casa"),
(10, "Lo recomiendo, muy buena relación calidad-precio");
