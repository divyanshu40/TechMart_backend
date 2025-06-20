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
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "address"
    }
}, {
    timestamps: true
});

const order = mongoose.model("order", orderSchema);

module.exports = { order }