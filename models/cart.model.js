const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    product: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    },
    quantity: {
        type: Number,
        default: 1
    }
});

const cart = mongoose.model("cart", cartSchema);

module.exports = { cart };