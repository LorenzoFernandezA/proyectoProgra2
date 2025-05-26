create schema base;
USE base;
CREATE TABLE usuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
mail VARCHAR(50) NOT NULL UNIQUE,
contrasena VARCHAR(50),
fecha DATE,
documento INT UNSIGNED,
foto VARCHAR(50),
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

INSERT INTO usuarios (mail, contrasena, fecha, documento, foto) VALUES
("lorenzo@ejemplo.com", "1234", '2000-01-01', 12345678, "/images/users/pepa.webp"),
("camila@ejemplo.com", "abcd", '1999-05-10', 23456789, "/images/users/pepa.webp"),
("mateo@ejemplo.com", "5678", '1998-07-21', 34567890, "/images/users/pepa.webp"),
("valentina@ejemplo.com", "qwerty", '2001-02-15', 45678901, "/images/users/pepa.webp"),
("tomas@ejemplo.com", "pass123", '2002-12-25', 56789012, "/images/users/pepa.webp"),
("julieta@ejemplo.com", "clave", '2000-06-18', 67890123, "/images/users/pepa.webp"),
("lucia@ejemplo.com", "lucia1", '2003-04-09', 78901234, "/images/users/pepa.webp"),
("ignacio@ejemplo.com", "nacho", '1997-11-30', 89012345, "/images/users/pepa.webp"),
("martina@ejemplo.com", "marti", '1996-03-20', 90123456, "/images/users/pepa.webp"),
("sofia@ejemplo.com", "sofi", '2001-08-12', 12341234, "/images/users/pepa.webp");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (1, "Adeportivos.webp", "Anteojos de sol clásicos", "Estilo vintage, lentes oscuros, marco negro.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (1, "Adesol.webp", "Anteojos rectangulares de lectura", "Diseño moderno, livianos, marco metálico.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (1, "Apolarizados.webp", "Anteojos redondos retro", "Ideal para estilo urbano, marco dorado.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (1, "ARectangulares.webp", "Anteojos deportivos UV400", "Alta protección solar, aptos para running y bici.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (1, "ARedondos.jpg", "Anteojos de sol polarizados", "Reducción de reflejos, lentes polarizados.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (1, "anteojosazul.webp", "Anteojos para pantalla azul", "Filtran luz azul, ideales para computadoras.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (1, "anteojosover.webp", "Anteojos fashion oversize", "Look llamativo, marco grande y oscuro.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (1, "anteojosredondos.webp", "Anteojos redondos transparentes", "Lentes sin aumento, estilo intelectual.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (1, "anteojosclip.webp", "Anteojos con clip solar", "Diseño práctico, lentes de sol removibles.");

INSERT INTO productos (idUsuario, nombreArchivoFoto, nombre, descripcion)
VALUES (1, "anteojoslivianos.webp", "Anteojos livianos unisex", "Marco de acetato, confort y ligereza.");



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
