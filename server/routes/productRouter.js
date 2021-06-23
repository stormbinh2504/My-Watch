const router = require("express").Router()
const producController = require("../controllers/productController")

// CRUD(Create,Read,Update,Delete) <=> GET,POST,UPDATE,DELETE
router.route('/')
    .get(producController.getProducts)
    .post(producController.createProduct)
router.route('/:id')
    .delete(producController.deleteProduct)
    .put(producController.updateProduct)
    .get(producController.getProduct)

module.exports = router