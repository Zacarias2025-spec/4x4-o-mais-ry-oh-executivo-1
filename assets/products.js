// products.js
const PRODUCTS = [
  {
    id: "apt-t3-1763703004983",
    category: "casas",
    title: "Apartamento à venda - Tipologia T3 (Prédio dos Solteiros)",
    price: "18.000.000 Kz",
    location: "Cabinda (Prédio Dos Solteiros)",
    contact: "924829157",
    images: [
      "https://i.ibb.co/mCYPJ379/1763703004983.jpg",
      "https://i.ibb.co/mFBvYwWS/1763703015203.jpg",
      "https://i.ibb.co/6Jb4qWMX/1763703021469.jpg",
      "https://i.ibb.co/wZfZ9NH6/1763703026882.jpg"
    ],
    description: `Três Quartos, Sala, Cuzinha, Wc, Varanda. Tudo limpo forrado e museicado.`
  },
  {
    id: "casa-t4-4abril",
    category: "casas",
    title: "Arrenda-se residência T4 mobilada (4 de Abril)",
    price: "350.000 Kz / mês (negociável)",
    location: "4 de Abril, Cabinda",
    contact: "935544477",
    images: [
      "https://i.ibb.co/8nWL4qkR/1763703144378.jpg",
      "https://i.ibb.co/DfRLJJR7/1763703147144.jpg",
      "https://i.ibb.co/vxwQpsTK/1763703149774.jpg",
      "https://i.ibb.co/d4gx3bMR/1763703152339.jpg"
    ],
    description: `Residência totalmente mobilada. Sala equipada, cozinha com eletrodomésticos, água e luz disponíveis. Pronta a habitar. Interessados só ligar.`
  },
  {
    id: "terreno-30x60-cabassango",
    category: "terrenos",
    title: "Terreno 30x60 - Cabassango (Atrás do Puniv)",
    price: "20.000.000 Kz",
    location: "Cabassango, Cabinda",
    contact: "924829157",
    images: [
      "https://i.ibb.co/N6sNnXbc/1763759636128.jpg",
      "https://i.ibb.co/Zz4BBjx5/1763759643549.jpg",
      "https://i.ibb.co/fz7S8p3F/1763759892039.jpg",
      "https://i.ibb.co/bRP3bnMF/1763759883086.jpg",
      "https://i.ibb.co/N6845QBy/1763759652840.jpg",
      "https://i.ibb.co/Ldd8PwmC/1763759658370.jpg"
    ],
    description: `Medidas: 30x60 metros. Localização estratégica para projectos. Aproveite esta oportunidade.`
  },
  {
    id: "telefone-1763759214227",
    category: "telefones",
    title: "Telefone (semi-novo) - Tudo limpo e operacional",
    price: "60.000 Kz",
    location: "Amílcar, Cabinda",
    contact: "924829157",
    images: [
      "https://i.ibb.co/mVKwXs97/1763759214227.jpg",
      "https://i.ibb.co/Xkbzq8Ls/1763759218943.jpg",
      "https://i.ibb.co/9kdBnxVv/1763759229226.jpg"
    ],
    description: `Telefone tudo limpo e operacional com carregador. Semi novo na caixa.`
  },
  {
    id: "outros-hilti-set",
    category: "outros",
    title: "Conjunto de ferramentas Hilti (com extras)",
    price: "1.090.390,00 Kz (último preço: 1.042.015,00 Kz)",
    location: "Cabinda",
    contact: "924829157",
    images: [
      "https://i.ibb.co/XM9wPs1/1763759902953.jpg",
      "https://i.ibb.co/JF5hCS7Y/1763759913545.jpg",
      "https://i.ibb.co/JF5hCS7Y/1763759913545.jpg"
    ],
    description: `Inclui martelo perfurador TE 3-M, adaptador, malas, brocas e acessórios.`
  },
  {
    id: "carro-kia-soul",
    category: "carros",
    title: "KIA Soul — CABINDA",
    price: "5.800.000 Kz (Negociável)",
    location: "Cabinda",
    contact: "924829157",
    images: [
      "https://i.ibb.co/nsRMSbp4/1763703046088.jpg",
      "https://i.ibb.co/wNHHwpYr/1763703050574.jpg",
      "https://i.ibb.co/9HFT6gj1/1763703058758.jpg",
      "https://i.ibb.co/hRGQT53J/1763703062249.jpg"
    ],
    description: `AC não trabalha, motor selado, pintura em dia, limpo dentro e fora. Jantes especiais.`
  },
  {
    id: "carro-hilux",
    category: "carros",
    title: "Hilux — Problema de turbo (negociável)",
    price: "4.500.000 Kz (Negociável)",
    location: "Cabinda",
    contact: "924829157",
    images: [
      "https://i.ibb.co/Z6ht2NTW/1763703115424.jpg",
      "https://i.ibb.co/dJJL04Hh/1763703118279.jpg"
    ],
    description: `Motor seco, pintura limpa. Obs: problema no turbo. Negócio rápido.`
  },
  {
    id: "carro-i10",
    category: "carros",
    title: "I10 1.2 — Caixa Automática",
    price: "5.000.000 Kz",
    location: "Cabinda",
    contact: "924829157",
    images: [
      "https://i.ibb.co/h1713J06/1763703082829.jpg",
      "https://i.ibb.co/TxWn6Ctk/1763703085420.jpg",
      "https://i.ibb.co/CKpR6Tg4/1763703088069.jpg",
      "https://i.ibb.co/C561xz0F/1763703090464.jpg",
      "https://i.ibb.co/4ws4PSMj/1763703093130.jpg",
      "https://i.ibb.co/k6JJLhn3/1763703065326.jpg"
    ],
    description: `I10 1.2, motor seco, caixa automática, pintura limpa, pronto para viajar. Documentos em ordem.`
  }
];
