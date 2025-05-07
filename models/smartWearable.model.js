const mongoose = require("mongoose");

const smartWatchSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        dialShape: {
            type: String,
            enum: ["Contemporary", "Curved", "Oval", "Rectangle", "Round", "Square", "Tonneau"]
        },
        displaySize: {
            type: Number
        },
        strapColor: {
            type: [String]
        },
        displayType: {
            type: String,
            enum: [
                "AMOLED",
                "Dot Matrix",
                "HD",
                "IPS HD",
                "IPS LCD",
                "IPS TFT",
                "LCD",
                "LED",
                "Mineral",
                "OLED",
                "OLED Retina Display",
                "Retina Display",
                "Super AMOLED",
                "TFT",
                "TFT LED",
                "Ultra HD"
              ],
        },
        idealFor: {
            type: String,
            enum: ["Kids", "Women", "Men", "Unisex"]
        },
        os: {
            type: String,
            enum: ["Android", "Android & iOS", "iOS", "Windows", "Propretiary OS"]
        },
        features: {
            types: [String],
        },
        strapMaterial: {
            type: String
        },
        usage: {
            type: String
        },
        modelName: {
            type: String
        },
        modelNumber: {
            type: String
        },
        otherGeneralFeatures: {
            attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    }
    },
    productDetails: {
        sensor: {
            type: [String]
        },
        compatibleDevice: {
            type: String
        },
        notificationType: {
            type: String
        },
        notifications: {
            type: [String]
        },
        batteryLife: {
            type: String
        }
    },
    connectivityFeatures: {
        attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    cameraAndDisplayFeatures: {
        attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    fitnessAndWatchFunctions: {
        attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    audioAndVideoFeatures: {
        attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    dimensions: {
        width:{
            type: Number
        },
        height: {
            type: Number
        },
        thickness: {
            type: Number
        },
        weight: {
            type: Number
        }
    },
    platformAndStorageFeatures: {
        attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    ratings: {
        type: Number
    },
    averageRating: {
        type: Number
    },
    reviews: {
        type: Number
    },
    orignalPrice: {
        type: Number
    },
    discount: {
        type: Number
    },
    discountedPrice: {
        type: Number
    },
    offers: {
        bankOffers: [
            {
                bankName: {
                    type: String
                },
                offerOnBank: {
                    type: Number
                },
                summary: {
                    type: String
                },
                termsAndConditions: {
                    type: String
                }
            }
        ],
        specialPriceOffers: {
            offerPrice: {
                type: Number
            },
            offerSummary: {
                type: String
            }
        }
    },
    warranty: {
        domesticWarranty: {
            type: String
        },
        warrantySummary: {
            type: String
        },
        warrantyServiceType: {
            type: String
        },
        warrantyCoverage: {
            type: String
        },
        notCoveredInWarranty: {
            type: String
        }
    },
    highlights: {
        type: [String]
    },
    productImages: {
        type: [String]
    },
    thumbnailImage: {
        type: String
    }
}, {
    timestamps: true
});

const smartWatch = mongoose.model("smartWatch", smartWatchSchema);

module.exports = { smartWatch };