const { Product } = require("../model/Product");

exports.createProduct = async (req, res) => {
  // this product we have to get from API body
  const product = new Product(req.body);
  try {
    const doc = await product.save();
    res.status(201).json(doc);
  } catch {
    res.status(400).json(err);
  }
};

exports.fetchAllProducts = async (req, res) => {
  // here we need all query string

  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10}
  let query = Product.find({});
  if (req.query.category) {
    query = query.find({ category: req.query.category });
  }
  if (req.query.brand) {
    query = query.find({ brand: req.query.brand });
  }
  if (req.query._sort && req.query._order) {
    query = query.sort({ [req.query._sort]: req.query._order });
  }
  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }
  try {
    const docs = await query.exec();
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
};
