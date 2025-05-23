const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    product: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    }
});

const cart = mongoose.model("cart", cartSchema);

module.exports = { cart };