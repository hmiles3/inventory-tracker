const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    dataPoints: [{
        x: Number,
        y: Number
    }]
},
{
    collection: "sales"
}
);

const Sales = mongoose.model("Sale", salesSchema)

module.exports = Sales;