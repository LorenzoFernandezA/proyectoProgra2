
const db = {
    usuario: {
      id: 1,
      nombre: "Lorenzo",
      productos: 8,
      seguidores: 200,
      comentarios: 300,
      email: "lorenzo@ejemplo.com",
      fotoPerfil: "/images/users/default-avatar.jpg"
    },
  
    productos: [
      {
        id: 1,
        nombre: "Anteojos de sol clásicos",
        descripcion: "Estilo vintage, lentes oscuros, marco negro.",
        precio: 15000,
        imagen: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        stock: 10,
        categoria: "Sol",
        cantComentarios: 3,
        comentarios: [
            {
                usuario: "María García",
                imagen: "/images/users/user1.jpg",
                texto: "Excelente producto, estoy muy contento con mi compra"
            },
            {
                usuario: "Carlos Rodríguez",
                imagen: "/images/users/user2.jpg",
                texto: "Muy lindos, ideal para la playa"
            },
            {
                usuario: "Laura Martínez",
                imagen: "/images/users/default-image.png",
                texto: "Lo recomiendo, muy buena relación calidad-precio"
            }
        ]
      },
      {
        id: 2,
        nombre: "Anteojos rectangulares de lectura",
        descripcion: "Diseño moderno, livianos, marco metálico.",
        precio: 12000,
        imagen: "https://images.unsplash.com/photo-1608471575900-56e09f43a9f4",
        stock: 8,
        categoria: "Lectura",
        cantComentarios: 3,
        comentarios: [
          {
              usuario: "Hector Gerardo",
              imagen: "/images/users/user1.jpg",
              texto: "Muy funcionales, estoy muy contento con mi compra"
          },
          {
              usuario: "James Rodríguez",
              imagen: "/images/users/user2.jpg",
              texto: "Muy lindos, ideal para gente mayor"
          },
          {
              usuario: "Lautuaro Martínez",
              imagen: "/images/users/default-image.png",
              texto: "Lo recomiendo, muy buena relación calidad-precio"
          }]
      },
      {
        id: 3,
        nombre: "Anteojos redondos retro",
        descripcion: "Ideal para estilo urbano, marco dorado.",
        precio: 17000,
        imagen: "https://images.unsplash.com/photo-1582089001071-6c6f77b5f38b",
        stock: 12,
        categoria: "Moda", 
        cantComentarios: 3,
        comentarios: [
          {
              usuario: "Ulises García",
              imagen: "/images/users/user1.jpg",
              texto: "Los rescomiendo fuertemente"
          },
          {
              usuario: "Juanceto01",
              imagen: "/images/users/user2.jpg",
              texto: "Muy lindos, ideal para salir de casa"
          },
          {
              usuario: "Ludovico Ortelli",
              imagen: "/images/users/default-image.png",
              texto: "Lo recomiendo, muy buena relación calidad-precio"
          }]
      },
      {
        id: 4,
        nombre: "Anteojos deportivos UV400",
        descripcion: "Alta protección solar, aptos para running y bici.",
        precio: 20000,
        imagen: "https://images.unsplash.com/photo-1555529771-35a38a9d3f5b",
        stock: 6,
        categoria: "Deporte",
        cantComentarios: 3,
        comentarios: [
          {
              usuario: "Barber1324",
              imagen: "/images/users/user1.jpg",
              texto: "Los mejores que probe"
          },
          {
              usuario: "Vito Muchisio",
              imagen: "/images/users/user2.jpg",
              texto: "Perfectos para correr"
          },
          {
              usuario: "Mriko Novak",
              imagen: "/images/users/default-image.png",
              texto: "Muy comodos y practicos"
          }]
      },
      {
        id: 5,
        nombre: "Anteojos de sol polarizados",
        descripcion: "Reducción de reflejos, lentes polarizados.",
        precio: 18000,
        imagen: "https://images.unsplash.com/photo-1588854337118-4c4d121a9d8e",
        stock: 15,
        categoria: "Sol",
        cantComentarios: 3,
        comentarios: [
          {
              usuario: "Federico Ovejero",
              imagen: "/images/users/user1.jpg",
              texto: "EL polarizado increible"
          },
          {
              usuario: "Fran Mamuska",
              imagen: "/images/users/user2.jpg",
              texto: "Son de otro planeta"
          },
          {
              usuario: "Sol Martinez",
              imagen: "/images/users/default-image.png",
              texto: "Lo recomiendo, muy buena relación calidad-precio"
          }]
      },
      {
        id: 6,
        nombre: "Anteojos para pantalla azul",
        descripcion: "Filtran luz azul, ideales para computadoras.",
        precio: 14000,
        imagen: "https://images.unsplash.com/photo-1592878849128-c4e7536be4a3",
        stock: 20,
        categoria: "Tecnología",
        cantComentarios: 3,
        comentarios: [
          {
              usuario: "Federico Alvarez",
              imagen: "/images/users/user1.jpg",
              texto: "Los uso y ya no me duele tanto la cabeza"
          },
          {
              usuario: "Valery Murray",
              imagen: "/images/users/user2.jpg",
              texto: "Muy lindos y funcionales"
          },
          {
              usuario: "Franco Blanco",
              imagen: "/images/users/default-image.png",
              texto: "Me vinieron barbaro"
          }]
      },
      {
        id: 7,
        nombre: "Anteojos fashion oversize",
        descripcion: "Look llamativo, marco grande y oscuro.",
        precio: 16500,
        imagen: "https://images.unsplash.com/photo-1557779935-25114dd7fa8b",
        stock: 9,
        categoria: "Moda",
        cantComentarios: 3,
        comentarios: [
          {
              usuario: "Fernando Gorrini",
              imagen: "/images/users/user1.jpg",
              texto: "Los rescomiendo fuertemente"
          },
          {
              usuario: "Marta Hillary",
              imagen: "/images/users/user2.jpg",
              texto: "Muy lindos, ideal para salir de casa"
          },
          {
              usuario: "Jose Dugan",
              imagen: "/images/users/default-image.png",
              texto: "Lo recomiendo, muy buena relación calidad-precio"
          }]
      },
      {
        id: 8,
        nombre: "Anteojos redondos transparentes",
        descripcion: "Lentes sin aumento, estilo intelectual.",
        precio: 13000,
        imagen: "https://images.unsplash.com/photo-1523475496153-3d6ccf8c38e3",
        stock: 7,
        categoria: "Lectura",
        cantComentarios: 3,
        comentarios: [
          {
              usuario: "Guillermo Coppola",
              imagen: "/images/users/user1.jpg",
              texto: "Fabulosos"
          },
          {
              usuario: "Diego Maradonna",
              imagen: "/images/users/user2.jpg",
              texto: "Muy lindos, ideal para salir de casa"
          },
          {
              usuario: "Gustavo Cerrati",
              imagen: "/images/users/default-image.png",
              texto: "Lo recomiendo, muy buena relación calidad-precio"
          }]
      },
      {
        id: 9,
        nombre: "Anteojos con clip solar",
        descripcion: "Diseño práctico, lentes de sol removibles.",
        precio: 19000,
        imagen: "https://images.unsplash.com/photo-1593032465171-c9bb52ef8d6b",
        stock: 11,
        categoria: "Sol",
        cantComentarios: 3,
        comentarios: [
          {
              usuario: "Donald Trump",
              imagen: "/images/users/user1.jpg",
              texto: "El clip es lo mejor"
          },
          {
              usuario: "Gabriel Batistuta",
              imagen: "/images/users/user2.jpg",
              texto: "Muy lindos, ideal para salir de casa"
          },
          {
              usuario: "Serena Williams",
              imagen: "/images/users/default-image.png",
              texto: "Lo recomiendo, me sirven mucho"
          }]
      },
      {
        id: 10,
        nombre: "Anteojos livianos unisex",
        descripcion: "Marco de acetato, confort y ligereza.",
        precio: 14500,
        imagen: "https://images.unsplash.com/photo-1592878892586-84a3a4e5cc26",
        stock: 13,
        categoria: "General", 
        cantComentarios: 3,
        comentarios: [
          {
              usuario: "Bart Simpson",
              imagen: "/images/users/user1.jpg",
              texto: "Los rescomiendo fuertemente"
          },
          {
              usuario: "Homero Simpson",
              imagen: "/images/users/user2.jpg",
              texto: "Muy lindos, los compartimos con March"
          },
          {
              usuario: "Lisa Simpson",
              imagen: "//images/users/default-image.png",
              texto: "Lo recomiendo, son livianos en serio. Es perfecto para que pueda leer las partituras. "
          }]
      }
    ]
  };
  
module.exports = db;
  