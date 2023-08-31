const { Schema, model } = require('mongoose')

const ProductSchema = new Schema(
    {
        productName: {
            type: String,
            required: true,
            unique: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        images: {
            type: Array,
            required: true
        },
        created: {
            type: Date,
            default: Date.now
        },
        reviews: {
            type: Array,    // Array of review objects
            default: [],    // Default empty array
            required: true
        }
    }
)

const Products = model('product', ProductSchema)
module.exports = Products
