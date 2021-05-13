const mongoose = require('mongoose')
mongoose.pluralize(null)

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: false,
        default: 0.0
    }
})

module.exports = mongoose.model('items', itemSchema)