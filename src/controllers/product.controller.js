'use strict';

const productService = require('../services/products.service');

const productController = {
    saveProduct: async (req, res) => {
        try {
            const payload = {
                name: req.body.name,
                description: req.body.description
            }

            const result = await productService.saveProduct(payload);

            const response = {
                code: 200,
                type: 'Success',
                message: 'Products saved successfully',
                body: result
            }
            res.send(response);
        } catch (error) {
            res.send({ status: 500, message: 'Error occured', data: error });
        }
    },
    getProducts: async (req, res) => {
        try {
            const results = await productService.getProducts();
            return res
                .send({ status: 200, message: 'Products retrieved successfully', data: results });
        } catch (error) {
            return res
                .status(statusCode)
                .send({ status: 500, message: 'Error occured', data: error });
        }
    }
}

module.exports = productController;