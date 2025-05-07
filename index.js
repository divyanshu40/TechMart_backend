const express = require("express");
const cors = require("cors");
const { mobile } = require("./models/mobile.model");
const { initializeDatabase } = require("./db/db.connect");
const {
    casesAndCovers,
    cameraLensProtector,
    powerBank,
    mobileHolder,
    mobilePouch,
    mobileCable,
    selfieStick,
    screenGuard,
    mobileDisplay,
    mobileCharger,
    headphone,
    earphone,
    memoryCard,
    mobileBattery
} = require("./models/mobileAccesories.model");
const { smartWatch } = require("./models/smartWearable.model");
const { trimmer, shaver, hairStraightener, hairDryer, hairCurler, hairStyler } = require("./models/personalCare.model");
const { glucometer, bpMonitor, vapourizer, pulseOximeter, weightingScale } = require("./models/healthCare.model");
const { laptop } = require("./models/laptop.model");
const { desktop } = require("./models/desktop.model");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.listen(PORT, () => {
    console.log("This server is running");
});

initializeDatabase();

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