const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    order: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    },
    orderQuantity: {
        type: Number,
        default: 1
    },
    orderOrignalPrice: {
        type: Number
    },
    orderDiscountedPrice: {
        type: Number
    },
    discountPercentage: {
        type: Number
    },
    discount: {
        type: Number
    }
});

const order = mongoose.model("order", orderSchema);

module.exports = { order }