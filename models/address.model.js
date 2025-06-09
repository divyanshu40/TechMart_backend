const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    address: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "techmartUser"
    }
}, {
    timestamps: true
});

const address = mongoose.model("address", addressSchema);

module.exports = { address };