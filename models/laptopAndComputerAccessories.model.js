const mongoose = require("mongoose");

const memoryCardReaderSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        otherGeneralFeatures: {
            attributes: {
                type: Map,
                of: mongoose.Schema.Types.Mixed
            }
        }
    },
    otherDetails: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
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

const mouseSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        features: {
            type: String,
            enum: ['Gaming', 'Wired', 'Wireless'],
        },
        interface: {
            type: String,
            enm: ["USB 2.0", "2.4GHz Wireless", "USB 3.0", "Bluetooth", "USB", "Type C", "PS/2"]
        },
        otherGeneralFeatures: {
            attributes: {
                type: Map,
                of: mongoose.Schema.Types.Mixed
            }
        }
    },
    connectivityAndPowerFeatures: {
        attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    dimensions: {
        attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    otherDetails: {
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

const laptopBatterySchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        otherGeneralFeatures: {
            attributes: {
                type: Map,
                of: mongoose.Schema.Types.Mixed
            }
        }
    },
    otherDetails: {
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

const memoryCardReader = mongoose.model("memoryCardReader", memoryCardReaderSchema);
const mouse = mongoose.model("mouse", mouseSchema);
const laptopBattery = mongoose.model("laptopBattery", laptopBatterySchema);

module.exports = { 
    memoryCardReader,
    mouse,
    laptopBattery
}