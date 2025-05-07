const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        laptopType: {
            type: String
        },
        processor: {
            processorType: {
                type: String
            },
            processorGeneration: {
                type: String
            },
            processorBrand: {
                type: String
            }
        },
        ram: {
            ramCapacity: {
                type: Number
            },
            ramtype: {
                type: String,
                enum: ["DDR4", "LPDDR4", "DDR3", "LPDDR5X", "LPDDR4X", "DDR5", "LPDDR5"]
            }
        },
        storage: {
            storageCapacity: {
                type: Number
            },
            storageType: {
                type: String,
                enum: ["SSD", "HDD"]
            }
        },
        screenSize: {
            type: Number
        },
        operatingSystem: {
            type: String
        },
        weight: {
            type: Number
        },
        isTouchScreen: {
            type: Boolean
        },
        usage: {
            type: String,
            enum: [
                "Business",
                "Student",
                "Everyday Use",
                "Home/Office",
                "Processing and Multitasking",
                "Gaming",
                "Home/Office"
            ]
        },
        graphicsMemory: {
            capacity: {
                type: Number
            },
            graphicsMemoryType: {
                type: String,
                enum: ["LPDDR5", "DDR5", "DDR4", "GDDR5", "GDDR6"]
            }
        },
        graphicsProcessorName: {
            type: String
        },
        colors: {
            type: [String]
        }
    },
    features: {
        type: [String]
    },
    otherGeneralFeatures: {
        attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    processorAndMemoryFeatures: {
        attributes: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
        }
    },
    operatingSystem: {
        attributes: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
        }
    },
    portAndSlotFeatures: {
        attributes: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
        }
    },
    displayAndAudioFeatures: {
        attributes: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
        }
    },
    connectivityFeatures: {
        attributes: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
        }
    },
    additionalFeatures: {
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

const laptop = mongoose.model("laptop", laptopSchema);

module.exports = { laptop }