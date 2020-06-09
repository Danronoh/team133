'use strict';

const Product = require('../models/product.model');

const productService = {
	saveProduct: async (payload) => {
		try {
			const newProduct = new Product({
				name: payload.name,
				description: payload.description
			});
			return await newProduct.save();
		} catch (error) {
			return error;
		}
	},
	getProducts: async () => {
		try {
			return await Product.find();
		} catch (error) {
			return error;
		}
	}

}

module.exports = productService;