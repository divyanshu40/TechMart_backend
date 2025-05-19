const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
    category: {
        type: String
    },
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
            }
        },
        storage: {
            storageCapacity: {
                type: Number
            },
            storageType: {
                type: String
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
            type: String
        },
        graphicsMemory: {
            capacity: {
                type: Number
            },
            graphicsMemoryType: {
                type: String
            }
        },
        graphicsProcessorName: {
            type: String
        },
        features: {
        type: [String]
    },
    otherGeneralFeatures: {
        attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
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
                id: {
                    type: Number
                },
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
            id: {
                type: Number
            },
             bankName: {
                type: String,
            },
            months: {
                type: [Number]
            }
           }
        ]
    },
    standardEmis: [
        {
            id: {
                type: Number
            },
            bankName: {
            type: String
        },
        interestRate: {
            type: Number
        },
         totalEmis: {
            type: [Number]
        }
        }
    ],
    warranty: {
        domesticWarranty: {
            type: Number
        },
        warrantySummary: {
            type: String
        },
        warrantyCoverage: {
            type: String
        },
    },
    highlights: [
        {
            id: {
                type: Number
            },
            highlightName: {
                type: String
            }
        }
    ],
    productImages: [
        {
            id: {
                type: Number,
            },
            imageUrl: {
                type: String
            }
        }
    ],
    thumbnailImage: {
        type: String
    }
}, {
    timestamps: true
});

const laptop = mongoose.model("laptop", laptopSchema);

module.exports = { laptop }