const orders = [
  {
    date: "2005-05-05",
    subtotal: 150.0,
    items: [
      {
        product: {
          id: "redshoe",
          desription: "Red Shoe",
          price: 42.12,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
