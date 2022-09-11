const {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addProduct,
  addProductReview
} = require("./products.model");

module.exports = {
  Query: {
    products: () => getAllProducts(),
    productsByPrice: (_, args) => {
      return getProductsByPrice(args.min, args.max);
    },
    productById: (_, args) => {
      return getProductById(args.productId);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return addProduct(args.id, args.description, args.price)
    },
    addNewProductReview: (_, args) => {
      const { id, rating, comment } = args
      return addProductReview(id, rating, comment)
    }
  }
};
