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
    dataPoints: {
        type: Array
    }
});

const Sales = mongoose.model("Sales", salesSchema)

module.exports = Sales;