import db from "../database/database";

const TABLE_NAME = "products";

async function getProducts() {
  // TODO
}

async function getProduct(id: number) {
  // TODO
}

async function createProduct(product) {
  // TODO
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;