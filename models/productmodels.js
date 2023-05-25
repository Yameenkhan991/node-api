
const mongoose = require('mongoose')
const productschema = mongoose.Schema({

    name: {
        type: String,
        require: [true, "please enter a prduct name"]
    },
    quantity: {
        type: Number,
        require: true,
        default: 0
    },
    price: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        require: false,
    }
},
{
    timestamps: true
}
)
const Product = mongoose.model('product', productschema);
module.exports = Product;