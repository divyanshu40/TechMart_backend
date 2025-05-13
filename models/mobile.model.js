const mongoose = require("mongoose");

const MobileSchema = new mongoose.Schema({
    category: {
        type: String
    },
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String,
        },
        ram: {
            type: Number
        },
        internalStorage: {
            type: [Number]
        },
        batteryCapacity: {
            type: Number
        },
        screenSize: {
            type: Number
        },
        primaryCamera: {
            type: Number
        },
        secondaryCamera: {
            type: Number
        },
        processorBrand: {
            type: String,
        },
        speciality: {
            type: [String]
        },
        resolutionType: {
            type: String
        },
        operatingSystem: {
            type: String
        },
        networkType: {
            type: [String]
        },
        simType: {
            type: String
        },
        features: {
            type: [String]
        },
        mobileType: {
            type: String
        },
        numberOfCores: {
            type: String
        },
        operatingSystemVersionName: {
            type: String
        },
        clockSpeed: {
            type: Number
        },
        otherGeneralFeatures: {
            attributes: {
                type: Map,
                of: mongoose.Schema.Types.Mixed
            }
        }
    },
    displayFeatures: {
        attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    osAndProcessorFeatures: {
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
    cameraFeatures: {
        attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    callFeatures: {
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
    multimediaFeatures: {
        attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    batteryAndPowerFeatures: {
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
    warranty: {
        warrantySummary: {
            type: String
        },
        warrantyCoverage: {
            type: String
        },
        domesticWarranty: {
            type: Number
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
    packagingFees: {
        applicability: {
            type: Boolean
        },
        fees: {
            type: Number
        }
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
                }
            }
        ],
        noCostEmiOffers: [
           {
             bankName: {
                type: String,
            },
            months: {
                type: [Number],
                default: [3, 6, 9]
            }
           }
        ]
    },
    emiOptions: [
        {
            bankName: {
            type: String
        },
        totalEmis: {
            type: [Number]
        },
        interestRate: {
            type: Number
        }
        }
    ],
    productImages: {
        type: [String]
    },
    thumbnailImage: {
        type: String
    }
},{
    timestamps: true
});

const mobile = mongoose.model("mobile", MobileSchema);

module.exports = { mobile };