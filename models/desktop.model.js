const mongoose = require("mongoose");

const desktopSchema = new mongoose.Schema({
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
    performanceFeatures: {
        attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    memoryAndStorageFeatures: {
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
    otherDetails:{
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

const desktop = mongoose.model("desktop", desktopSchema);

module.exports = { desktop };