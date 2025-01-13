const mongoose = require('mongoose');

const prooductSchema = mongoose.Schema(
    {
        name:String,
        price:String,
        description:String,
        ratings:String,
        images:[{
            image:String
        }],
        category:String,
        stock:String,
        numOfReviews:String,
        createdAt:Date
    }
)

const productModel = mongoose.model('product',prooductSchema);

module.exports = productModel;