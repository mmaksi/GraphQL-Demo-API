const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jean",
    price: 55.55,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(minPrice, maxPrice) {
  return products.filter((product) => {
    return product.price >= minPrice && product.price <= maxPrice;
  });
}

function getProductById(id) {
  const product = products.find((product) => {
    return product.id === id;
  });
  return product;
}

function addProduct(id, description, price) {
  const newProduct = { id, description, price, reviews: [] };

  products.push(newProduct);
  return newProduct;
}

function addProductReview(id, rating, comment) {
  const matchedProduct = getProductById(id);
  if (matchedProduct) {
    const newReview = { id, rating, comment };
    matchedProduct.reviews.push(newReview);
    return newReview
  }
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addProduct,
  addProductReview,
};
