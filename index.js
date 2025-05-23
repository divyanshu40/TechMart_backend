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
        if (Array.isArray(filter.$and)) {
            filter.$and.push({ $or: batteryCapacityFilters });
        } else {
            filter.$and = [{ $or: batteryCapacityFilters }];
        }
    }
    if (screenSize) {
        let screenSizeRange = Array.isArray(screenSize) ? screenSize : [screenSize];
        let screenSizeFilters = screenSizeRange.map((range) => {
            const [min, max] = range.split("-").map(Number);
            return { "generalFeatures.screenSize": { $gte: min, $lte: max } }
        });
        if (Array.isArray(filter.$and)) {
            filter.$and.push({ $or: screenSizeFilters });
        } else {
            filter.$and = [{ $or: screenSizeFilters }];
        }
    }
    if (primaryCamera) {
        let primaryCameraRange = Array.isArray(primaryCamera) ? primaryCamera : [primaryCamera];
        let primaryCameraFilters = primaryCameraRange.map((range) => {
            const [min, max] = range.split("-").map(Number);
            return { "generalFeatures.primaryCamera": { $gte: min, $lte: max } }
        })
       if (Array.isArray(filter.$and)) {
        filter.$and.push({ $or: primaryCameraFilters });
       } else {
        filter.$and = [{ $or: primaryCameraFilters }];
       }
    }
    if (secondaryCamera) {
        let secondaryCameraRange = Array.isArray(secondaryCamera) ? secondaryCamera : [secondaryCamera];
        let secondaryCameraFilters = secondaryCameraRange.map((range) => {
            const [min, max] = range.split("-").map(Number);
            return { "generalFeatures.secondaryCamera": { $gte: min, $lte: max } }
        });
       if (Array.isArray(filter.$and)) {
        filter.$and.push({ $or: secondaryCameraFilters });
       } else {
        filter.$and = [{ $or: secondaryCameraFilters }];
       }
    }
    if (processorBrand) {
        filter["generalFeatures.processorBrand"] = Array.isArray(processorBrand) ? { $in: processorBrand } : processorBrand
    }
    if (speciality) {
        filter["generalFeatures.speciality"] = Array.isArray(speciality) ? { $in: speciality} : speciality
    }
    if (resolutionType) {
        filter["generalFeatures.resolutionType"] = Array.isArray(resolutionType) ? { $in: resolutionType } : resolutionType
    }
    if (operatingSystem) {
        filter["generalFeatures.operatingSystem"] = Array.isArray(operatingSystem) ? { $in: operatingSystem } : operatingSystem
    }
    if (networkType) {
        filter["generalFeatures.networkType"] = Array.isArray(networkType) ? { $in: networkType } : networkType
    }
    if (simType) {
        filter["generalFeatures.simType"] = Array.isArray(simType) ? { $in: simType } : simType
    }
    if (features) {
        filter["generalFeatures.features"] = Array.isArray(features) ? { $in: features } : features
    } 
    if (mobileType) {
        filter["generalFeatures.mobileType"] = Array.isArray(mobileType) ? { $in: mobileType } : mobileType
    }
    if(numberOfCores) {
        filter["generalFeatures.numberOfCores"] = Array.isArray(numberOfCores) ? { $in: numberOfCores } : numberOfCores
    }
    if (operatingSystemVersionName) {
        filter["generalFeatures.operatingSystemVersionName"] = Array.isArray(operatingSystemVersionName) ? { $in: operatingSystemVersionName} : operatingSystemVersionName
    }
    if(clockSpeed) {
        let clockSpeedRange = Array.isArray(clockSpeed) ? clockSpeed : [clockSpeed];
        let clockSpeedFilters = clockSpeedRange.map((range) => {
            const [min, max] = range.split("-").map(Number);
            return { "generalFeatures.clockSpeed": { $gte: min, $lte: max } }
        });
       if (Array.isArray(filter.$and)) {
        filter.$and.push({ $or: clockSpeedFilters });
       } else {
        filter.$and = [{ $or: clockSpeedFilters }];
       }
    }
    if (discountedPrice) {
        let discountedPriceRange = Array.isArray(discountedPrice) ? discountedPrice : [discountedPrice];
        let discountedPriceFilters = discountedPriceRange.map((range) => {
            const [min, max] = range.split("-").map(Number);
            return { discountedPrice: { $gte: min, $lte: max } }
        });
       if (Array.isArray(filter.$and)) {
        filter.$and.push({ $or: discountedPriceFilters });
       } else {
        filter.$and = [{ $or: discountedPriceFilters }];
       }
    }
    
    let mobiles = await mobile.find(filter);
    return { mobiles: mobiles };
}

// function to filter laptops
async function filterLaptops(filterParams) {
   let {
    brand,
    laptopType,
    processorType,
    processorGeneration,
    processorBrand,
    ramCapacity,
    ramType,
    storageCapacity,
    storageType,
    screenSize,
    operatingSystem,
    weight,
    isTouchScreen,
    usage,
    graphicsMemoryCapacity,
    graphicsMemoryType,
    graphicsProcessorName,
    features,
    discountedPrice
   } = filterParams;

   let filter = {};

   if (brand) {
    filter["generalFeatures.brand"] = Array.isArray(brand) ? { $in: brand } : brand;
   }
   if (laptopType) {
    filter["generalFeatures.laptopType"] = Array.isArray(laptopType) ? { $in: laptopType } : laptopType;
   }
   if (processorType) {
    filter["generalFeatures.processor.processorType"] = Array.isArray(processorType) ? { $in: processorType } : processorType
   }
   if (processorGeneration) {
    filter["generalFeatures.processor.processorGeneration"] = Array.isArray(processorGeneration) ? { $in: processorGeneration} : processorGeneration;
   }
   if (processorBrand) {
    filter["generalFeatures.brand.processor.processorBrand"] = Array.isArray(processorBrand) ? { $in: processorBrand } : processorBrand;
   }
   if (ramCapacity) {
    filter["generalFeatures.ram.ramCapacity"] = Array.isArray(ramCapacity) ? { $in: ramCapacity.map(Number) } : Number(ramCapacity);
   }
   if (ramType) {
    filter["generalFeatures.ram.ramType"] = Array.isArray(ramType) ? { $in: ramType } : ramType;
   }
   if (storageCapacity) {
    filter["generalFeatures.storage.storageCapacity"] = Array.isArray(storageCapacity) ? { $in: storageCapacity.map(Number) } : Number(storageCapacity);
   }
   if (storageType) {
    filter["generalFeatures.storage.storageType"] = Array.isArray(storageType) ? { $in: storageType } : storageType
   }
   if (screenSize) {
    let screenSizeRanges = Array.isArray(screenSize) ? screenSize : [screenSize];
    let screenSizeFilters = screenSizeRanges.map((range) => {
        const [min, max] = range.split("-").map(Number);
        return { "generalFeatures.screenSize": { $gte: min, $lte: max } }
    });
    if (Array.isArray(filter.$and)) {
        filter.$and.push({ $or: screenSizeFilters });
    } else {
        filter.$and = [{ $or: screenSizeFilters }];
    }
   }
   if (operatingSystem) {
    filter["generalFeatures.operatingSystem"] = Array.isArray(operatingSystem) ? { $in: operatingSystem } : operatingSystem;
   }
   if (weight) {
    let weightRanges = Array.isArray(weight) ? weight : [weight];
    let weightFilters = weightRanges.map((range) => {
        const [min, max] = range.split("-").map(Number);
        return { "generalFeatures.weight": { $gte: min, $lte: max } }
    });
    if (Array.isArray(filter.$and)) {
        filter.$and.push({ $or: weightFilters });
    } else {
        filter.$and = [{ $or: weightFilters }];
    }
   }
   if (isTouchScreen) {
    filter["generalFeatures.isTouchScreen"] = isTouchScreen === "true";
   }
   if (usage) {
    filter["generalFeatures.usage"] = Array.isArray(usage) ? { $in: usage } : usage;
   }
   if (graphicsMemoryCapacity) {
    filter["generalFeatures.graphicsMemory.capacity"] = Array.isArray(graphicsMemoryCapacity) ? { $in: graphicsMemoryCapacity.map(Number)} : Number(graphicsMemoryCapacity);
   }
   if (graphicsMemoryType) {
    filter["generalFeatures.graphicsMemory.graphicsMemoryType"] = Array.isArray(graphicsMemoryType) ? { $in: graphicsMemoryType} : graphicsMemoryType;
   }
   if (features) {
    filter["generalFeatures.features"] = Array.isArray(features) ? { $in: features } : features;
   }
   if (graphicsProcessorName) {
    filter["generalFeatures.graphicsProcessorName"] = Array.isArray(graphicsProcessorName) ? { $in: graphicsProcessorName} : graphicsProcessorName;
   }
   if (discountedPrice) {
    let priceRanges = Array.isArray(discountedPrice) ? discountedPrice : [discountedPrice];
    let priceFilters = priceRanges.map((range) => {
        const [min, max] = range.split("-").map(Number);
        return { discountedPrice: { $gte: min, $lte: max } }
    });
    if (Array.isArray(filter.$and)) {
        filter.$and.push({ $or: priceFilters });
    } else {
        filter.$and = [{ $or: priceFilters }]
    }
   }

   let laptops = await laptop.find(filter);
   return { laptops: laptops };
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

// GET route to filter laptops
app.get("/laptops/filter", async (req, res) => {
    let filterParams = req.query;
    try {
        let response = await filterLaptops(filterParams);
        if (response.laptops.length === 0) {
            return res.status(404).json({ message: "Laptops not found" });
        }
        return res.status(200).json(response);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});