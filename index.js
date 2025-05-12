const express = require("express");
const cors = require("cors");
const { mobile } = require("./models/mobile.model");
const { initializeDatabase } = require("./db/db.connect");
const app = express();
const PORT = process.env.PORT || 3000;

initializeDatabase().then(() => {
    console.log("✅ Connected to MongoDB");

    // ✅ START SERVER ONLY AFTER DB CONNECTS
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
    });
})

app.use(express.json());
app.use(cors());

// function to get all mobiles
async function getAllMobiles() {
    const mobiles = await mobile.find();
    return { mobiles: mobiles };
}

// function to get mobile details by id
async function getMobileDetailsById(productId) {
    let mobileDetails = await mobile.findById(productId);
    if (! mobileDetails) {
        return null;
    }
    return { mobile: mobileDetails };
}


// POST route to add mobile data
app.post("/mobiles/new", async (req, res) => {
    const mobileData = req.body
    try {
        const addedMobileData = await new mobile(mobileData).save();
        return res.status(201).json({ newMobile: addedMobileData });
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
    
});

// GET route to get all mobiles
app.get("/mobiles", async (req, res) => {
    try {
        let response = await getAllMobiles();
        if (response.mobiles.length === 0) {
            return res.status(404).json({ message: "Mobiles not found" });
        }
        return res.status(200).json(response);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

// GET route to get mobile by id
app.get("/mobiles/details/:id", async (req, res) => {
    let productId = req.params.id;
    try {
        let response = await getMobileDetailsById(productId);
        if (response === null) {
            return res.status(404).json({ message: "Mobile details not found" });
        }
        return res.status(200).json(response);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});