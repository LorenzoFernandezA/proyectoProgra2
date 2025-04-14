
const db = {
    usuario: {
      id: 1,
      nombre: "Lorenzo",
      productos: 8,
      seguidores: 200,
      comentarios: 300,
      email: "lorenzo@ejemplo.com",
      fotoPerfil: "/images/users/pepa.webp",
    },
  
    productos: [
      {
        id: 1,
        nombre: "Anteojos de sol clásicos",
        descripcion: "Estilo vintage, lentes oscuros, marco negro.",
        precio: 15000,
        imagen: "/images/Adeportivos.webp",
        stock: 10,
        categoria: "Sol",
        cantComentarios: 3,
        comentarios: [
          {
            usuario: "Federico Ovejero",
            imagen: "/images/users/pepa.webp",
            texto: "EL polarizado increible"
        },
        {
            usuario: "Fran Mamuska",
            imagen: "/images/users/pepa.webp",
            texto: "Son de otro planeta"
        },
        {
            usuario: "Sol Martinez",
            imagen: "/images/users/pepa.webp",
            texto: "Lo recomiendo, muy buena relación calidad-precio"
        }
        ]
      },
      {
        id: 2,
        nombre: "Anteojos rectangulares de lectura",
        descripcion: "Diseño moderno, livianos, marco metálico.",
        precio: 12000,
        imagen: "/images/Adesol.webp",
        stock: 8,
        categoria: "Lectura",
        cantComentarios: 3,
        comentarios: [
          {
            usuario: "Federico Ovejero",
            imagen: "/images/users/pepa.webp",
            texto: "EL polarizado increible"
        },
        {
            usuario: "Fran Mamuska",
            imagen: "/images/users/pepa.webp",
            texto: "Son de otro planeta"
        },
        {
            usuario: "Sol Martinez",
            imagen: "/images/users/pepa.webp",
            texto: "Lo recomiendo, muy buena relación calidad-precio"
        }]
      },
      {
        id: 3,
        nombre: "Anteojos redondos retro",
        descripcion: "Ideal para estilo urbano, marco dorado.",
        precio: 17000,
        imagen: "/images/Apolarizados.webp",
        stock: 12,
        categoria: "Moda", 
        cantComentarios: 3,
        comentarios: [
          {
            usuario: "Federico Ovejero",
            imagen: "/images/users/pepa.webp",
            texto: "EL polarizado increible"
        },
        {
            usuario: "Fran Mamuska",
            imagen: "/images/users/pepa.webp",
            texto: "Son de otro planeta"
        },
        {
            usuario: "Sol Martinez",
            imagen: "/images/users/pepa.webp",
            texto: "Lo recomiendo, muy buena relación calidad-precio"
        }]
      },
      {
        id: 4,
        nombre: "Anteojos deportivos UV400",
        descripcion: "Alta protección solar, aptos para running y bici.",
        precio: 20000,
        imagen: "/images/ARectangulares.webp",
        stock: 6,
        categoria: "Deporte",
        cantComentarios: 3,
        comentarios: [
          {
            usuario: "Federico Ovejero",
            imagen: "/images/users/pepa.webp",
            texto: "EL polarizado increible"
        },
        {
            usuario: "Fran Mamuska",
            imagen: "/images/users/pepa.webp",
            texto: "Son de otro planeta"
        },
        {
            usuario: "Sol Martinez",
            imagen: "/images/users/pepa.webp",
            texto: "Lo recomiendo, muy buena relación calidad-precio"
        }]
      },
      {
        id: 5,
        nombre: "Anteojos de sol polarizados",
        descripcion: "Reducción de reflejos, lentes polarizados.",
        precio: 18000,
        imagen: "/images/ARedondos.jpg",
        stock: 15,
        categoria: "Sol",
        cantComentarios: 3,
        comentarios: [
          {
              usuario: "Federico Ovejero",
              imagen: "/images/users/pepa.webp",
              texto: "EL polarizado increible"
          },
          {
              usuario: "Fran Mamuska",
              imagen: "/images/users/pepa.webp",
              texto: "Son de otro planeta"
          },
          {
              usuario: "Sol Martinez",
              imagen: "/images/users/pepa.webp",
              texto: "Lo recomiendo, muy buena relación calidad-precio"
          }]
      },
      {
        id: 6,
        nombre: "Anteojos para pantalla azul",
        descripcion: "Filtran luz azul, ideales para computadoras.",
        precio: 14000,
        imagen: "/images/anteojosazul.webp",
        stock: 20,
        categoria: "Tecnología",
        cantComentarios: 3,
        comentarios: [
          {
              usuario: "Federico Alvarez",
              imagen: "/images/users/pepa.webp",
              texto: "Los uso y ya no me duele tanto la cabeza"
          },
          {
              usuario: "Valery Murray",
              imagen:"/images/users/pepa.webp",
              texto: "Muy lindos y funcionales"
          },
          {
              usuario: "Franco Blanco",
              imagen: "/images/users/pepa.webp",
              texto: "Me vinieron barbaro"
          }]
      },
      {
        id: 7,
        nombre: "Anteojos fashion oversize",
        descripcion: "Look llamativo, marco grande y oscuro.",
        precio: 16500,
        imagen: "/images/anteojosover.webp",
        stock: 9,
        categoria: "Moda",
        cantComentarios: 3,
        comentarios: [
          {
              usuario: "Fernando Gorrini",
              imagen: "/images/users/pepa.webp",
              texto: "Los rescomiendo fuertemente"
          },
          {
              usuario: "Marta Hillary",
              imagen: "/images/users/user2.jpg",
              texto: "Muy lindos, ideal para salir de casa"
          },
          {
              usuario: "Jose Dugan",
              imagen: "/images/users/pepa.webp",
              texto: "Lo recomiendo, muy buena relación calidad-precio"
          }]
      },
      {
        id: 8,
        nombre: "Anteojos redondos transparentes",
        descripcion: "Lentes sin aumento, estilo intelectual.",
        precio: 13000,
        imagen: "/images/anteojosredondos.webp",
        stock: 7,
        categoria: "Lectura",
        cantComentarios: 3,
        comentarios: [
          {
              usuario: "Guillermo Coppola",
              imagen: "/images/users/pepa.webp",
              texto: "Fabulosos"
          },
          {
              usuario: "Diego Maradonna",
              imagen: "/images/users/pepa.webp",
              texto: "Muy lindos, ideal para salir de casa"
          },
          {
              usuario: "Gustavo Cerrati",
              imagen: "/images/users/pepa.webp",
              texto: "Lo recomiendo, muy buena relación calidad-precio"
          }]
      },
      {
        id: 9,
        nombre: "Anteojos con clip solar",
        descripcion: "Diseño práctico, lentes de sol removibles.",
        precio: 19000,
        imagen: "/images/anteojosclip.webp",
        stock: 11,
        categoria: "Sol",
        cantComentarios: 3,
        comentarios: [
          {
              usuario: "Donald Trump",
              imagen: "/images/users/pepa.webp",
              texto: "El clip es lo mejor"
          },
          {
              usuario: "Gabriel Batistuta",
              imagen: "/images/users/user2.jpg",
              texto: "Muy lindos, ideal para salir de casa"
          },
          {
              usuario: "Serena Williams",
              imagen: "/images/users/pepa.webp",
              texto: "Lo recomiendo, me sirven mucho"
          }]
      },
      {
        id: 10,
        nombre: "Anteojos livianos unisex",
        descripcion: "Marco de acetato, confort y ligereza.",
        precio: 14500,
        imagen: "/images/anteojoslivianos.webp",
        stock: 13,
        categoria: "General", 
        cantComentarios: 3,
        comentarios: [
          {
              usuario: "Bart Simpson",
              imagen: "/images/users/pepa.webp",
              texto: "Los rescomiendo fuertemente"
          },
          {
              usuario: "Homero Simpson",
              imagen: "/images/users/pepa.webp",
              texto: "Muy lindos, los compartimos con March"
          },
          {
              usuario: "Lisa Simpson",
              imagen:"/images/users/pepa.webp",
              texto: "Lo recomiendo, son livianos en serio. Es perfecto para que pueda leer las partituras. "
          }]
      }
    ]
  };
  
module.exports = db;
  