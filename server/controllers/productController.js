const uuid = require('uuid')
const path = require('path')
const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {
    async create(req, res, next) {
        try {
            const {name, price, categoryId} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".svg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const product = await Product.create({name, price, categoryId, img: fileName})

        return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {categoryId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let products;
        if (!categoryId) {
            products = await Product.findAndCountAll({limit, offset})
        }
        if (categoryId) {
            products = await Product.findAndCountAll({where: {categoryId}, limit, offset})
        }
        return res.json(products)
    }
}

module.exports = new ProductController()