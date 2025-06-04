const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    order: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    },
    orderQuantity: {
        type: Number,
        default: 1
    }
});

const order = mongoose.model("order", orderSchema);

module.exports = { order }