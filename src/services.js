const products = [
  {
    id: "1",
    name: "XX99 MARK II HEADPHONES",
    price: 2999,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    category: "headphones",
    image: "/img/headphones/xx99mark2.jpg",
  },
  {
    id: "2",
    name: "XX99 MARK I HEADPHONES",
    price: 1750,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    category: "headphones",
    image: "/img/headphones/xx99mark1.jpg",
  },
  {
    id: "3",
    name: "XX59 HEADPHONES",
    price: 899,
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    category: "headphones",
    image: "/img/headphones/xx59.jpg",
  },
  {
    id: "4",
    name: "ZX9 SPEAKER",
    price: 4500,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    category: "speakers",
    image: "/img/speakers/zx9.jpg",
  },
  {
    id: "5",
    name: "ZX7 SPEAKER",
    price: 3500,
    description:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    category: "speakers",
    image: "/img/speakers/zx7.jpg",
  },
  {
    id: "6",
    name: "YX1 WIRELESS EARPHONES",
    price: 599,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    category: "earphones",
    image: "/img/earphones/yx1.jpg",
  },
];

// getProduct
export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === id);

      if (product) {
        resolve(product);
      } else {
        reject("Producto no encontrado");
      }
    }, 1000);
  });
};

// getProducts
export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productsFiltered = category
        ? products.filter((product) => product.category === category)
        : products;

      resolve(productsFiltered);
    }, 1000);
  });
};
