const express = require("express");
const cors = require("cors");
const { mobile } = require("./models/mobile.model");
const { initializeDatabase } = require("./db/db.connect");
const { laptop } = require("./models/laptop.model");
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

// function to get all laptops
async function getAllLaptops() {
    let laptops = await laptop.find();
    return { laptops: laptops };
}

// function to filter mobiles on the basis of filter attributes
async function filterMobiles(filterParams) {
    let filter = {}
    const {
        brand,
        ram, 
        internalStorage,
        batteryCapacity,
        screenSize,
        primaryCamera,
        secondaryCamera,
        processorBrand,
        speciality,
        resolutionType,
        operatingSystem,
        networkType,
        simType,
        features,
        mobileType,
        numberOfCores,
        operatingSystemVersionName,
        clockSpeed,
        discountedPrice  
    } = filterParams;
    if (brand) {
       filter["generalFeatures.brand"] = Array.isArray(brand) ? { $in: brand } : brand;
    }
    if (ram) {
        filter["generalFeatures.ram"] = Array.isArray(ram) ? { $in: ram.map(Number) } : Number(ram);
    }
    if (internalStorage) {
        filter["generalFeatures.internalStorage"] = Array.isArray(internalStorage) ? { $in: internalStorage.map(Number) } : Number(internalStorage);
    }
    if (batteryCapacity) {
        let batteryCapacityRanges = Array.isArray(batteryCapacity) ? batteryCapacity : [batteryCapacity];
        let batteryCapacityFilters = batteryCapacityRanges.map((range) => {
            const [min, max] = range.split("-").map(Number);
            return { "generalFeatures.batteryCapacity":  { $gte: min, $lte: max } }
        });
        if (filter.$or) {
            filter.$or = [...filter.$or, ...batteryCapacityFilters]
        } else {
            filter.$or = batteryCapacityFilters;
        }
    }
    if (screenSize) {
        let screenSizeRange = Array.isArray(screenSize) ? screenSize : [screenSize];
        let screenSizeFilters = screenSizeRange.map((range) => {
            const [min, max] = range.split("-").map(Number);
            return { "generalFeatures.screenSize": { $gte: min, $lte: max } }
        });
        if (filter.$or) {
            filter.$or = [...filter.$or, ...screenSizeFilters]
        } else {
            filter.$or = screenSizeFilters
        }
    }
    if (primaryCamera) {
        let primaryCameraRange = Array.isArray(primaryCamera) ? primaryCamera : [primaryCamera];
        let primaryCameraFilters = primaryCameraRange.map((range) => {
            const [min, max] = range.split("-").map(Number);
            return { "generalFeatures.primaryCamera": { $gte: min, $lte: max } }
        })
        if (filter.$or) {
            filter.$or = [...filter.$or, ...primaryCameraFilters];
        } else {
            filter.$or = primaryCameraFilters
        }
    }
    if (secondaryCamera) {
        let secondaryCameraRange = Array.isArray(secondaryCamera) ? secondaryCamera : [secondaryCamera];
        let secondaryCameraFilters = secondaryCameraRange.map((range) => {
            const [min, max] = range.split("-").map(Number);
            return { "generalFeatures.secondaryCamera": { $gte: min, $lte: max } }
        });
        if (filter.$or) {
            filter.$or = [...filter.$or, ...secondaryCameraFilters];
        } else {
            filter.$or = secondaryCameraFilters;
        }
    }
    if (processorBrand) {
        filter.processorBrand = Array.isArray(processorBrand) ? { $in: processorBrand } : processorBrand
    }
    if (speciality) {
        filter.speciality = Array.isArray(speciality) ? { $in: speciality} : speciality
    }
    if (resolutionType) {
        filter.resolutionType = Array.isArray(resolutionType) ? { $in: resolutionType } : resolutionType
    }
    if (operatingSystem) {
        filter.operatingSystem = Array.isArray(operatingSystem) ? { $in: operatingSystem } : operatingSystem
    }
    if (networkType) {
        filter.networkType = Array.isArray(networkType) ? { $in: networkType } : networkType
    }
    if (simType) {
        filter.simType = Array.isArray(simType) ? { $in: simType } : simType
    }
    if (features) {
        filter.features = Array.isArray(features) ? { $in: features } : features
    } 
    if (mobileType) {
        filter.mobileType = Array.isArray(mobileType) ? { $in: mobileType } : mobileType
    }
    if(numberOfCores) {
        filter.numberOfCores = Array.isArray(numberOfCores) ? { $in: numberOfCores } : numberOfCores
    }
    if (operatingSystemVersionName) {
        filter.operatingSystemVersionName = Array.isArray(operatingSystemVersionName) ? { $in: operatingSystemVersionName} : operatingSystemVersionName
    }
    if(clockSpeed) {
        let clockSpeedRange = Array.isArray(clockSpeed) ? clockSpeed : [clockSpeed];
        let clockSpeedFilters = clockSpeedRange.map((range) => {
            const [min, max] = range.split("-").map(Number);
            return { "generalFeatures.clockSpeed": { $gte: min, $lte: max } }
        });
        if (filter.$or) {
            filter.$or = [...filter.$or, ...clockSpeedFilters];
        } else {
            filter.$or = clockSpeedFilters;
        }
    }
    if (discountedPrice) {
        let discountedPriceRange = Array.isArray(discountedPrice) ? discountedPrice : [discountedPrice];
        let discountedPriceFilters = discountedPriceRange.map((range) => {
            const [min, max] = range.split("-").map(Number);
            return { "discountedPrice": { $gte: min, lte: max } }
        });
        if (filter.$or) {
            filter.$or = [...filter.$or, ...discountedPriceFilters];
        } else {
            filter.$or = discountedPriceFilters;
        }
    }
    
    let mobiles = await mobile.find(filter);
    return { mobiles: mobiles };
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

// POST route to add laptop data
app.post("/laptops/new", async (req, res) => {
    const laptopData = req.body;
    try {
        const addedlaptop = await new laptop(laptopData).save();
        return res.status(201).json({ newLaptop: addedlaptop });
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

// GET route to get all laptops
app.get("/laptops", async (req, res) => {
    try {
        let response = await getAllLaptops();
        if (response.laptops.length === 0) {
            return res.status(404).json({ message: "Laptops not find" });
        }
        return res.status(200).json(response);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

// GET route to filter mobiles
app.get("/mobiles/filter", async (req, res) => {
    let filterParams = req.query;
    try {
        let response = await filterMobiles(filterParams);
        if (response.mobiles.length === 0) {
            return res.status(404).json({ message: "Mobiles not found" });
        }
        return res.status(200).json(response);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

