const express = require("express");
const Products = require("../controllers/products");
const ProductController = new Products();
var router = express.Router();

router.get("/", (req, res) => {
  let data = req.query.id
    ? ProductController.getById(req.query.id)
    : ProductController.getAll();
  console.log(data);
  res.render("products/index", {
    title: "Listado de productos",
    products: data,
  });
});

router.get("/add", (req, res) => {
  res.render("products/add", { title: "Agregar productos" });
});

router.get("/edit/:id", (req, res) => {
  console.log(req.params.id);
  const data = ProductController.getById(req.params.id);
  console.log(data);
  res.render("products/edit", { title: "Editar productos", products: data });
});

router.post("/add", (req, res) => {
  console.log(req.body);
  ProductController.create(req.body)
    ? res.redirect("/products")
    : res.redirect("/products/add");
});

router.post("/edit/:id", (req, res) => {
  console.log(req.body);
  ProductController.update(req.params.id, req.body)
    ? res.redirect("/products")
    : res.redirect("/products/edit/" + req.params.id);
});

router.get("/delete/:id", (req, res) => {
  console.log(req.params.id);
  if (ProductController.delete(req.params.id)) res.redirect("/products");
});

module.exports = router;
