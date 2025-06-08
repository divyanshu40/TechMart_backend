const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    gender: {
        type: String
    },
    emailId: {
        type: String
    },
    phoneNumber: {
        type: String
    }
}, {
    timestamps: true
});

const techmartUser = mongoose.model("techmartUser", userSchema);

module.exports = { techmartUser };