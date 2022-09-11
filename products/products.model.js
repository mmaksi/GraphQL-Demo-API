const products = [
  {
    id: "redshoe",
    desription: "Red Shoe",
    price: 42.12,
  },
  {
    id: "bluejean",
    desription: "Blue Jean",
    price: 55.55,
  },
];

function getAllProducts(params) {
  return products
}

module.exports = {
  getAllProducts
}