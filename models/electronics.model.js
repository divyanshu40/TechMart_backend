const mongoose = require("mongoose");

const MobileSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String,
            required: true
        },
        brand: {
            type:String
        },
        colors: {
            type: [String]
        },
        browseType: {
            type: String
        },
        simType: {
            type: String
        },
        hybridSimSlot: {
            type: Boolean
        },
        touchScreen: {
            type: Boolean
        },
        otgCompatibility: {
            type: Boolean
        },
        quickCharging: {
            type: Boolean
        }
    },
    displayFeatures: {
        displaySize: {
            type: Number
        },
        resolution: {
            type: String
        },
        resolutionType: {
            type: String
        },
        gpu: {
            type: String
        },
        displayType: {
            type: String
        },
        hdGameSupport: {
            type: String
        },
        displayColors: {
            type: Number
        },
        otherDisplayFeatures: {
            type: [String]
        }
    },
    osAndProcessorFeatures: {
        operatingSystem: {
            type: String
        },
        processorBrand: {
            type: String
        },
        processorType: {
            type: String
        },
        primaryClockSpeed: {
            type: Number
        },
        secondaryClockSpeed: {
            type: Number
        },
        operatingFrequency: {
            type: [String]
        }
    },
    memoryAndStorageFeatures: {
        internalStorage: {
            type: [Number]
        },
        RAM: {
            type: [Number]
        },
        supportedMemoryCardType: {
            type: String
        },
        phoneBookMemory: {
            type: Boolean
        },
        callLogMemory: {
            type: Boolean
        },
        smsMemory: {
            type: Boolean
        }
    },
    cameraFeatures: {
        primaryCameraAvailable: {
            type: Number
        },
        primaryCamera: {
            type: String
        },
        primaryCameraFeatures: {
            type: [String]
        },
        opticalZoom: {
            type: Boolean
        },
        secondaryCameraAvailable: {
            type: Boolean
        },
        secondaryCamera: {
            type: String
        },
        secondaryCameraFeatures: {
            type: [String]
        },
        flash: {
            type: String
        },
        hdRecording: {
            type: Boolean
        },
        fullHdRecoding: {
            type: Boolean
        },
        videoRecording: {
            type: Boolean
        },
        videoRecordingResolution: {
            type: String
        },
        digitalZoom: {
            type: String
        },
        frameRate: {
            type: String
        },
        imageEditor: {
            type: Boolean
        },
        dualCameraLens: {
            type: String
        }
    },
    callFeatures: {
        callWaitHold: {
            type: Boolean
        },
        conferenceCall: {
            type: Boolean
        },
        handsFree: {
            type: Boolean
        },
        videoCallSupport: {
            type: Boolean
        },
        callDivert: {
            type: Boolean
        },
        phoneBook: {
            type: Boolean
        },
        callTimer: {
            type: Boolean
        },
        speakerPhone: {
            type: Boolean
        },
        speedDialing: {
            type: Boolean
        },
        callRecords: {
            type: mongoose.Schema.Types.Mixed
        },
        logs: {
            type: [String]
        }
    },
    connectivityFeatures: {
        networkType: {
            type: [String]
        },
        supportedNetwork: {
            type: String
        },
        internetConnectivity: {
            type: [String]
        },
        _3G: {
            type: Boolean
        },
        _3GSpeed: {
            type: String
        },
        gprs: {
            type: Boolean
        },
        preInstalledBrowser: {
            type: String
        },
        microUsbPort: {
            type: Boolean
        },
        microUsbVersion: {
            type: String
        },
        miniUsbPort: {
            type: Boolean
        },
        bluetoothSupport: {
            type: Boolean
        },
        bluetoothVersion: {
            type: String
        },
        wifi: {
            type: Boolean
        },
        wifiVersion: {
            type: String
        },
        wifiHotspot: {
            type: Boolean
        },
        miniHdmiPort: {
            type: Boolean
        },
        NFC: {
            type: Boolean
        },
        usbTethering: {
            type: Boolean
        },
        tvOut: {
            type: Boolean
        },
        infrared: {
            type: Boolean
        },
        usbConnectivity: {
            type: Boolean
        },
        audioJack: {
            type: String
        },
        mapSupport: {
            type: Boolean
        },
        gpsSupport: {
            type: Boolean
        }
    },
    multimediaFeatures: {
        fmRadio: {
            type: Boolean
        },
        fmRadioRecording: {
            type: Boolean
        },
        dlnaSupport: {
            type: Boolean
        },
        audioFormats: {
            type: [String]
        },
        musicPlayer: {
            type: Boolean
        },
        videoFormats: {
            type: [String]
        }
    },
    batteryAndPowerFeatures: {
        batteryCapacity: {
            type: Number
        },
        batteryType: {
            type: String
        },
        dualBattery: {
            type: Boolean
        }
    },
    dimensions: {
        width: {
            type: Number
        },
        height: {
            type: Number
        },
        depth: {
            type: Number
        },
        weight: {
            type: Number
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
    otherDetails: {
        smartPhone: {
            type: Boolean
        },
        touchScreen: {
            type: String
        },
        simSize: {
            type: String
        },
        mobileTracker: {
            type: Boolean
        },
        socialNeworkingPhone: {
            type: Boolean
        },
        instantMessage: {
            type: Boolean
        },
        removableBattery: {
            type: Boolean
        },
        mms: {
            type: Boolean
        },
        sms: {
            type: Boolean
        },
        keypad: {
            type: Boolean
        },
        voiceInput: {
            type: Boolean
        },
        graphicsppi: {
            type: String
        },
        predictiveTextInput: {
            type: Boolean
        },
        userMemory: {
            type: Number
        },
        simAccess: {
            type: String
        },
        sensors: {
            type: [String]
        },
        upgradableOperatingSystem: {
            type: String
        },
        browser: {
            type: String
        },
        ringtonesFormat: {
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
                },
                termsAndConditions: {
                    type: String
                }
            }
        ],
        noCostEmiOffers: {
            bankName: {
                type: [String],
                default: ["American Express", "Axis Bank", "BOBCARD", "Bajaj Finserv", "DBS Bank", "Federal Bank", "HDFC Bank", "Yes Bank", "SBI Credit Card", "Induslnd Bank"]
            },
            months: {
                type: [Number],
                default: [3, 6, 9]
            }
        },
        specialPriceOffers: {
            offerPrice: {
                type: Number
            },
            offerSummary: {
                type: String
            }
        }
    },
    emiOptions: {
        bankName: {
            type: [String],
            default: ["American Express", "Axis Bank", "BOBCARD", "Bajaj Finserv", "DBS Bank", "Federal Bank", "HDFC Bank", "Yes Bank", "SBI Credit Card", "Induslnd Bank"]
        },
        totalEmis: {
            type: [Number]
        },
        interestRate: {
            type: Number
        }
    },
    productImages: {
        type: [String]
    },
    thumbnailImage: {
        type: String
    }
},{
    timestamps: true
});


const mobileCaseSchema = new mongoose.Schema({
    name: {
        type: String
    },
    material: {
        type: String
    },
    theme: {
        type: String
    },
    productType: {
        type: String
    },
    modelNumber: {
        type: String
    },
    color: {
        type: String
    },
    designedFor: {
        type: [String]
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
    netQuantity: {
        type: Number
    },
    otherFeatures: {
        type: [String]
    },
    returnPolicy: {
        days: Number
    },
    productImages: {
        type: [Strings]
    },
    thumbnailImage: {
        type: String
    }
}, {
    timestamps: true
});

const headphonesAndEarPhonesSchema = new mongoose.Schema({
    general: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        modelId: {
            type: String
        },
        colors: {
            type: [String]
        },
        headphoneType: {
            type: String,
            enum: ['In the Ear', 'On the Ear', 'True Wireless']
        },
        inlineRemote: {
            type: Boolean
        },
        salesPackage: {
            type: String
        },
        connectivity: {
            type: String,
            enum: ["Wired", "Bluetooth", "Bluetooth & Wired"]
        },
        headphoneDesign: {
            type :String,
            enum: ["Behind the Neck", "Earbud", "Flatwire", "Foldable Over the Head", "Over the Head"]
        },
        compatibleDevices: {
            type: [String],
            enum: ["Audio Player", "Desktop", "Gaming Console", "Laptop", "Mobile", "Studio Recording", "Tablet", "Television"]
        }
    },
    produtDetails: {
        deepBase: {
            type: Boolean,
            default: false
        },
        fastCharging: {
            type: Boolean
        },
        flatWire: {
            type: Boolean
        },
        foldableCollapsible: {
            type: Boolean
        },
        noiseCancellation: {
            type: Boolean
        },
        sweatProof: {
            type: Boolean
        },
        trueWireless: {
            type: Boolean
        },
        waterResistant: {
            type: Boolean
        },
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
    availability: {
        type: Boolean
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
    }, discount: {
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
    }
}, {
    timestamps: true
});

const powerBankSchema = new mongoose.Schema({
    name: {
        type: String
    },
    brand: {
        type: String
    },
    salesPakckage: {
        type: String
    },
    modelName: {
        type: String
    },
    suitableDevice: {
        type: [String]
    },
    ports: {
        type: Number
    },
    isChargingCableAvilable: {
        type: Boolean
    },
    weight: {
        type: Number
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
    connectorsType: {
        type: [String],
        enum: ["DC Power Jack", "Lightning", "Micro", "Mini", "Thunderbolt", "Type-A", "Type-C", "Wireless"]
    },
    isAvailable: {
        type: Boolean,
        default: true
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
    colors: {
        type: [String]
    },
    highlights: {
        type: [String]
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
    capacity: {
        type: Number
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

const screenGuardSchema = new mongoose.Schema({
    name: {
        type: String
    },
    brand: {
        type: String
    },
    color: {
        type: String
    },
    layers: {
        type: Number
    },
    screenSize: {
        type: Number
    },
    height: {
        type: Number
    },
    width: {
        type: Number
    },
    cameraHolePresent: {
        type: Boolean
    },
    attributes: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
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

const memoryCardSchema = new mongoose.Schema({
    name: {
        type: String
    },
    brand: {
        type: String
    },
    salesPackage: {
        type: String
    },
    series: {
        type: String
    },
    modelNumber: {
        type: String
    },
    writeSpeed: {
        type: Number
    },
    readSpeed: {
        type: Number
    },
    storageCapacity: {
        type: Number
    },
    cardType: {
        type: String,
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
    ratings: {
        Number
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

const mobileCablesSchema = new mongoose.Schema({
    general: {
        name: {
            type: String
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
        connectors: {
            connector_1: {
                type: String
            },
            connector_2: {
                type: String
            }
        },
        cable: {
            type: String
        },
        partNumber: {
            type: String
        },
        model: {
            type: String
        },
        compatibleDevices: {
            type: [String]
        },
        cableLength: {
            type: Number
        },
        otherGeneralFeatures: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
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
        transmissionAttributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    additionalFeatures: {
        additionalFeaturesAttributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    ratings: {
        Number
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

const mobileChargers = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        modelName: {
            type: String
        },
        modelNumber: {
            type: String
        },
        outputInterface: {
            type: String
        },
        ledIndicator: {
            type: Boolean
        },
        display: {
            type: Boolean
        },
        batteryType: {
            type: String
        },
        connectorType: {
            type: String
        },
        dimensions: {
            width: {
                type: Number
            },
            height: {
                type: Number
            },
            depth: {
                type: Number
            }
        },
        weight: {
            type: Number
        },
        otherGeneralFeatures: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    powerFeatures: {
        powerInput: {
            type: Number
        },
        outputCurrent: {
            type: Number
        },
        outputWattage: {
            type: Number
        },
        otherFeatures: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }
    },
    numberOfPorts: {
        type: Number
    },
    ratings: {
        Number
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


const smartWatches = new mongoose.Schema({
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
            type: Map,
            of: mongoose.Schema.Types.Mixed
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
        Number
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
