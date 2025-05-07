const mongoose = require("mongoose");

const CasesAndCoversSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String,
        },
        brand: {
            type: String
        },
        compatibleMobiles: {
            type: [String]
        },
        coverType: {
            type: String
        },
        color: {
            type: [String]
        },
        material: {
            type: String
        },
        theme: {
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
    productImages: {
        type: [String]
    },
    thumbnailImage: {
        type: String
    },
    heighlights: {
        type: [String]
    }
}, {
    timestamps: true
});

const cameraLensProtectorsSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        compatibleMobiles: {
            type: [String]
        },
        features: {
            type: [String]
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
    productImages: {
        type: [String]
    },
    thumbnailImage: {
        type: String
    },
    heighlights: {
        type: [String]
    }
}, {
    timestamps: true
});

const powerBanksSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        capacity: {
            type: Number
        },
        batteryType: {
            type: String
        },
        connectorsType: {
            type: [String],
            enum: ["DC Power Jack", "Lightning", "Micro", "Mini", "Thunderbolt", "Type-A", "Type-C", "Wireless"]
        },
        ports: {
            type: Number
        },
        otherGeneralFeatures: {
            attributes: {
                type: Map,
                of: mongoose.Schema.Types.Mixed
            }
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
    productImages: {
        type: [String]
    },
    thumbnailImage: {
        type: String
    },
    heighlights: {
        type: [String]
    }
}, {
    timestamps: true
});

const mobileHoldersSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        holderType: {
            type: String,
            enum: [
                "AC Vent",
                "Card Holder",
                "CD Slot",
                "Dashboard",
                "Desktop",
                "Flexible",
                "Hanging",
                "Headrest",
                "Mobile Grip",
                "Ring",
                "Steering",
                "Windshield"
              ]
        },
        mountType: {
            type: String,
            enum: ["Clip", "Magnet", "Stand", "Sticky Pad", "Suction Cup"]
        },
        color: {
            type:[String]
        },
        material: {
            type: String
        },
        otherGeneralFeatures: {
            attributes: {
                type: Map,
                of: mongoose.Schema.Types.Mixed
            }
        }
    },
    additionalFeatures: {
        attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        },
    },
    dimensions: {
        height: {
            type: Number
        },
        width: {
            type: Number
        },
        weight: {
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
    productImages: {
        type: [String]
    },
    thumbnailImage: {
        type: String
    },
    heighlights: {
        type: [String]
    }
}, {
    timestamps: true
});

const mobileBatterySchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        compatibleModel: {
            type: [String]
        },
        capacity: {
            type: Number
        },
        otherGeneralFeatures: {
            attributes: {
                type: Map,
                of: mongoose.Schema.Types.Mixed
            }
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
    productImages: {
        type: [String]
    },
    thumbnailImage: {
        type: String
    },
    heighlights: {
        type: [String]
    }
}, {
    timestamps: true
});

const mobilePouchesSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        compatibleMobiles: {
            type: [String]
        },
        otherGeneralFeatures: {
            attributes: {
                type: Map,
                of: mongoose.Schema.Types.Mixed
            }
        }
    },
    productDetails: {
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
    productImages: {
        type: [String]
    },
    thumbnailImage: {
        type: String
    },
    heighlights: {
        type: [String]
    }
}, {
    timestamps: true
});

const mobileCablesSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type:String
        },
        brand: {
            type: String
        },
        cableType: {
            type: String,
            enum: [
                "USB Type C Cable",
                "Micro USB Cable",
                "Lightning Cable",
                "Type C",
                "3-in-1 Cable",
                "Power Sharing Cable",
                "Magnetic Charging Cable",
                "4-in-1 Cable",
                "AUX Cable",
                "Reversible USB 2.0",
                "RCA Audio Video Cable",
                "Stereo Audio Cable",
                "Video Cable",
                "2-in-1 Cable",
                "Mono Audio Cable",
                "Digital Coax Audio Cable",
                "Reversible Micro USB",
                "MHL Cable"
                ]
        },
        compatibleDevices: {
            type: [String]
        },
        cableLength: {
            type: Number
        },
        otherGeneralFeatures: {
            attributes: {
                type: Map,
                of: mongoose.Schema.Types.Mixed
            }
        }
    },
    materialFeatures: {
            attributes: {
                type: Map,
                of: mongoose.Schema.Types.Mixed
            }
        },
        transmissionFeatures: {
            voltageRating: {
                type: Number
            },
            maximumCurrentRating: {
                type: Number
            },
            otherTranmissionFeatures: {
                attributes: {
                    type: Map,
                    of: mongoose.Schema.Types.Mixed
                }
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

const selfieStickSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        supportedInterface: {
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
        attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    dimensions: {
        extendedLength: {
            type: Number
        },
        foldedLength: {
            type: Number
        },
        extendedWidth: {
            type: Number
        },
        weight: {
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

const screenGuardsSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        compatibleMobiles: {
            type: [String]
        },
        screenGuardType: {
            type: String,
            enum: [
                "Back Screen Guard",
                "Back Tempered Glass",
                "Camera Lens Protector",
                "Edge To Edge Screen Guard",
                "Edge To Edge Tempered Glass",
                "Front and Back Screen Guard",
                "Front and Back Tempered Glass",
                "Impossible Screen Guard",
                "Nano Glass",
                "Screen Guard",
                "Tempered Glass"
              ]
        },
        packOf: {
            type: Number
        },
        features: {
            type : String,
            enum: [
                "Scratch Resistant",
                "Anti Glare",
                "Air-bubble Proof",
                "Anti Fingerprint",
                "Anti Reflection",
                "11D Tempered Glass",
                "Anti Bacterial",
                "UV Protection",
                "Smart Screen Guard",
                "Matte Screen Guard",
                "6D Tempered Glass",
                "Washable",
                "Nano Liquid Screen Protector",
                "Anti-Blue Light Guard",
                "Privacy Screen Guard",
                "3D Tempered Glass",
                "Diamond Screen Guard",
                "3D Screen Guard",
                "Mirror Screen Guard",
                "4D Screen Guard",
                "4D Tempered Glass"
            ]
        },
        otherGeneralFeatures: {
            attributes: {
                type: Map,
                of: mongoose.Schema.Types.Mixed
            }
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

const mobileDisplaysSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        displayType: {
            type: String,
            enum: ["Haptic/Tactile Touchscreen", "IPS LCD", "LCD", "OLED", "Super AMOLED", "TFT LCD"]
        },
        compatibleMobiles: {
            type: [String]
        },
        otherGeneralFeatures: {
            attributes: {
                type: Map,
                of: mongoose.Schema.Types.Mixed
            }
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

const mobileChargersSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        numberOfUsbPorts: {
            type: Number
        },
        compatibleMobiles: {
            type: [String]
        },
        otherGeneralFeatures: {
            attributes: {
                type: Map,
                of: mongoose.Schema.Types.Mixed
            }
        }
    },
    powerFeatures: {
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

const headphonesSchema = new mongoose.Schema({
    headset: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        headphoneDesign: {
            type: String,
            enum: [
                "Behind the Neck",
                "Canalphone",
                "Ear Clip",
                "Earbud",
                "Earwings",
                "Flatwire",
                "Foldable Over the Head",
                "Magnetized Buds",
                "Over the Head"
              ]
        },
        headphoneType: {
            type: String
        },
        features: {
            type: [String]
        },
        connectivity: {
            type: String,
            enum: ["Wired", "Bluetooth & Wired", "Wired"]
        },
        color: {
            type: [String]
        },
        compatibleDevices: {
            type: [String]
        },
        otherGeneralFeatures: {
            attributes: {
                type: Map,
                of: mongoose.Schema.Types.Mixed
            }
        }
    },
    productDetails: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    },
    connectivityFeatures: {
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

const earphonesSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        earphoneDesign: {
            type: String,
            enum: [
                "Behind the Neck",
                "Canalphone",
                "Ear Clip",
                "Earbud",
                "Earwings",
                "Flatwire",
                "Foldable Over the Head",
                "Magnetized Buds",
                "Over the Head"
              ]
        },
        earphoneType: {
            type: String,
            enum: ["In the Ear", "True Wireless"]
        },
        connectivity: {
            type: String,
            enum: ["Bluetooth", "Bluetooth & Wired", "Wired"]
        },
        features: {
            type: [String]
        },
        color: {
            type: [String]
        },
        compatibleDevices: {
            type: [String]
        },
        otherGeneralFeatures: {
            attributes: {
                type: Map,
                of: mongoose.Schema.Types.Mixed
            }
        }
    },
    productDetails: {
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
    soundFeatures: {
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

const memoryCardsSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        capacity: {
            type: Number
        },
        memoryCardType: {
            type: Number,
            enum: [
                "CFexpress",
                "Compact Flash",
                "Extreme Pro SDHC",
                "Memory Stick",
                "Memory Stick Pro Duo Card",
                "Memory Stick PRO-HG Duo Card",
                "Memory Stick XC",
                "MicroSD Card",
                "MicroSDHC",
                "MicroSDXC",
                "MMC",
                "MMC Micro Card",
                "P2 Card",
                "SD Card",
                "SDHC",
                "SDHC UHS-I Card",
                "SDXC",
                "SDXC UHS-I Card",
                "TF Card",
                "Type B",
                "Ultra SDHC"
              ]
        },
        otherGeneralFeatures: {
            attributes: {
                type: Map,
                of: mongoose.Schema.Types.Mixed
            }
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


const casesAndCovers = mongoose.model("case", CasesAndCoversSchema);
const cameraLensProtector = mongoose.model("cameraLensProtector", cameraLensProtectorsSchema);
const powerBank = mongoose.model("powerBank", powerBanksSchema);
const mobileHolder = mongoose.model("mobileHolder", mobileHoldersSchema);
const mobileBattery = mongoose.model("mobileBattery", mobileBatterySchema);
const mobilePouch = mongoose.model("mobilePouch", mobilePouchesSchema);
const mobileCable = mongoose.model("mobileCable", mobileCablesSchema);
const selfieStick = mongoose.model("selfieStick", selfieStickSchema);
const screenGuard = mongoose.model("screenGuard", screenGuardsSchema);
const mobileDisplay = mongoose.model("mobileDisplay", mobileDisplaysSchema);
const mobileCharger = mongoose.model("mobileCharger", mobileChargersSchema);
const headphone = mongoose.model("headphone", headphonesSchema);
const earphone = mongoose.model("earphone", earphonesSchema);
const memoryCard = mongoose.model("memoryCard", memoryCardsSchema);


module.exports = {
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
}