const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
    product: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    }
});

const wishlist = mongoose.model("wishlist", wishlistSchema);

module.exports = { wishlist };