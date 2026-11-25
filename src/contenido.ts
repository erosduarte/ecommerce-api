import { FooterContenido, HomeContenido, SeccionMenu } from './contenido.model';

export const Home: HomeContenido = {
  categorias: [
    { nombre: 'Camisetas',  categoria: 'Ropa',       subcategoria: 'camisetas', imagen: 'https://static.bershka.net/assets/public/d06c/69fa/6320443b9c76/800884837eec/04559071250-p/04559071250-p.jpg?ts=1794915595756&w=850&f=auto',  color: '#000000'  },
    { nombre: 'Zapatos',    categoria: 'Calzado',    subcategoria: 'zapatos',   imagen: 'https://static.bershka.net/assets/public/0eb0/102f/70eb489da344/611664bc9377/12316864202-b1o/12316864202-b1o.jpg?ts=1783068296572&w=850&f=auto', color: '#ffffff' },
    { nombre: 'Accesorios', categoria: 'Accesorios', subcategoria: null,        imagen: 'https://static.bershka.net/assets/public/b4be/25d3/6dd74b54a741/640263ca9bd9/02692419800-p/02692419800-p.jpg?ts=1792748609467&w=850&f=auto',  color: '#000000'},
  ],
  colecciones: [
    { nombre: 'Camisetas',  categoria: 'Ropa',       subcategoria: 'camisetas', imagen: 'https://static.bershka.net/assets/public/a1ec/e606/d3734ae9ba90/f2332a656f4d/04559071250-a4o/04559071250-a4o.jpg?ts=1794478930807&w=750&f=auto' },
    { nombre: 'Jeans',      categoria: 'Ropa',       subcategoria: 'jeans',     imagen: 'https://static.bershka.net/assets/public/0470/d118/e70c4ead8beb/80122f0fde1c/02892054800-a4o/02892054800-a4o.jpg?ts=1781684157786&w=850&f=auto' },
    { nombre: 'Zapatos',    categoria: 'Calzado',    subcategoria: 'zapatos',   imagen: 'https://static.bershka.net/assets/public/45a9/a04e/20f34203b04f/f739974d384c/12314864040-01-a4o/12314864040-01-a4o.jpg?ts=1781854696527&w=750&f=auto' },
    { nombre: 'Accesorios', categoria: 'Accesorios', subcategoria: null,        imagen: 'https://static.bershka.net/assets/public/07b7/e0e8/5b8a4e7690d8/302e5a4c7f56/02692419800-a4o/02692419800-a4o.jpg?ts=1782986482905&w=750&f=auto' },
  ],
  pilares: [
    {
      titulo: 'Fidelidad',
      descripcion: 'Beneficios exclusivos, lanzamientos anticipados y detalles especiales para clientes frecuentes.',
      imagen: 'https://i.pinimg.com/1200x/71/b0/e6/71b0e64aea2478e9eb598fc8ea3de495.jpg',
      ruta: '/catalogo',
      params: { categoria: 'Accesorios' },
    },
    {
      titulo: 'Transparencia',
      descripcion: 'Selección cuidada de materiales, cortes y acabados pensados para durar temporada tras temporada.',
      imagen: 'https://i.pinimg.com/1200x/45/5f/df/455fdf19eb8701d7900caeb42a01118e.jpg',
      ruta: '/catalogo',
      params: { categoria: 'Ropa' },
    },
    {
      titulo: 'Catálogo curado',
      descripcion: 'Piezas esenciales y de temporada reunidas en un solo lugar para armar tu rotación diaria.',
      imagen: 'https://i.pinimg.com/736x/2b/13/30/2b1330f4bd1efba90b8a1315241c69fd.jpg',
      ruta: '/catalogo',
      params: { categoria: 'Ropa', subcategoria: 'camisetas' },
    },
    {
      titulo: 'Editorial & estilo',
      descripcion: 'Explora combinaciones, siluetas y propuestas pensadas para el día a día.',
      imagen: 'https://i.pinimg.com/1200x/8c/52/26/8c52265e02271c320eb6a9af69c40a55.jpg',
      ruta: '/catalogo',
      params: { categoria: 'Ropa', subcategoria: 'jeans' },
    },
    {
      titulo: 'Envíos rápidos',
      descripcion: 'Despacho ágil en tus pedidos y gestión sencilla desde tu carrito y cuenta.',
      imagen: 'https://i.pinimg.com/736x/4e/93/78/4e9378a48809e814a3c127fdf5543cb4.jpg',
      ruta: '/catalogo',
      params: { categoria: 'Calzado', subcategoria: 'zapatos' },
    },
  ],
};

export const Menu: SeccionMenu[] = [
  {
    nombre: 'Camisetas',
    params: { categoria: 'Ropa', subcategoria: 'camisetas' },
    columnas: [
      {
        titulo: 'Categoría',
        enlaces: [
          { texto: 'Ver todo', params: { categoria: 'Ropa' } },
          { texto: 'Camisetas', params: { categoria: 'Ropa', subcategoria: 'camisetas' } },
        ],
      },
    ],
    destacados: [
      { texto: 'Camisetas', imagen: 'https://static.bershka.net/assets/public/a1ec/e606/d3734ae9ba90/f2332a656f4d/04559071250-a4o/04559071250-a4o.jpg?ts=1794478930807&w=750&f=auto', params: { categoria: 'Ropa', subcategoria: 'camisetas' } },
      { texto: 'Ropa', imagen: 'https://static.bershka.net/assets/public/d5f9/13a2/77bf4423b239/c33e2990e868/02997116420-a4o/02997116420-a4o.jpg?ts=1793635944554&w=750&f=auto', params: { categoria: 'Ropa' } },
    ],
  },
  {
    nombre: 'Jeans',
    params: { categoria: 'Ropa', subcategoria: 'jeans' },
    columnas: [
      {
        titulo: 'Categoría',
        enlaces: [
          { texto: 'Ver todo', params: { categoria: 'Ropa' } },
          { texto: 'Jeans', params: { categoria: 'Ropa', subcategoria: 'jeans' } },
        ],
      },
    ],
    destacados: [
      { texto: 'Flared jeans', imagen: 'https://static.bershka.net/assets/public/0470/d118/e70c4ead8beb/80122f0fde1c/02892054800-a4o/02892054800-a4o.jpg?ts=1781684157786&w=850&f=auto', params: { categoria: 'Ropa', subcategoria: 'jeans' } },
    ],
  },
  {
    nombre: 'Zapatos',
    params: { categoria: 'Calzado', subcategoria: 'zapatos' },
    columnas: [
      {
        titulo: 'Categoría',
        enlaces: [
          { texto: 'Ver todo', params: { categoria: 'Calzado' } },
          { texto: 'Zapatos', params: { categoria: 'Calzado', subcategoria: 'zapatos' } },
        ],
      },
    ],
    destacados: [
      { texto: 'Zapatos', imagen: 'https://static.bershka.net/assets/public/45a9/a04e/20f34203b04f/f739974d384c/12314864040-01-a4o/12314864040-01-a4o.jpg?ts=1781854696527&w=750&f=auto', params: { categoria: 'Calzado', subcategoria: 'zapatos' } },
      { texto: 'Calzado', imagen: 'https://static.bershka.net/assets/public/3c7b/2aa5/b85b42968d1e/cf6708dbccab/12422864040-a4o/12422864040-a4o.jpg?ts=1789118082738&w=750&f=auto', params: { categoria: 'Calzado' } },
    ],
  },
  {
    nombre: 'Accesorios',
    params: { categoria: 'Accesorios' },
    columnas: [
      {
        titulo: 'Categoría',
        enlaces: [{ texto: 'Ver todo', params: { categoria: 'Accesorios' } }],
      },
    ],
    destacados: [
      { texto: 'Accesorios', imagen: 'https://static.bershka.net/assets/public/07b7/e0e8/5b8a4e7690d8/302e5a4c7f56/02692419800-a4o/02692419800-a4o.jpg?ts=1782986482905&w=750&f=auto', params: { categoria: 'Accesorios' } },
    ],
  },
];

export const Footer: FooterContenido = {
  columnas: [
    {
      titulo: 'Atención al cliente',
      enlaces: [
        { texto: 'Contacto', ruta: '/aboutus' },
        { texto: 'Envíos', ruta: '/' },
        { texto: 'Devoluciones', ruta: '/' },
        { texto: 'Preguntas frecuentes', ruta: '/' },
      ],
    },
    {
      titulo: 'Tienda',
      enlaces: [
        { texto: 'Catálogo', ruta: '/catalogo' },
        { texto: 'Camisetas', ruta: '/catalogo', params: { categoria: 'Ropa', subcategoria: 'camisetas' } },
        { texto: 'Zapatos', ruta: '/catalogo', params: { categoria: 'Calzado', subcategoria: 'zapatos' } },
        { texto: 'Accesorios', ruta: '/catalogo', params: { categoria: 'Accesorios' } },
      ],
    },
    {
      titulo: 'Nosotros',
      enlaces: [
        { texto: 'Nuestra historia', ruta: '/aboutus' },
        { texto: 'Carrito', ruta: '/carrito' },
      ],
    },
  ],
  redes: [
    { texto: 'Instagram', url: 'https://www.instagram.com' },
    { texto: 'TikTok', url: 'https://www.tiktok.com' },
    { texto: 'Facebook', url: 'https://www.facebook.com' },
    { texto: 'Pinteres', url: 'https://es.pinterest.com/' },
  ],
};