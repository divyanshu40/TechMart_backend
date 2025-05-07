const mongoose = require("mongoose");

const glucometerSchema = new mongoose.Schema({
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

const bpMonitorSchema = new mongoose.Schema({
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

const vapourizerSchema = new mongoose.Schema({
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
    productDetails: {
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

const pulseOximeterSchema = new mongoose.Schema({
    generalFeatures: {
        name: {
            type: String
        },
        brand: {
            type: String
        },
        pulseOximeterType: {
            type: String,
            enum: ["Fingertip", "Handheld"]
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
    convenientFeatures: {
        attributes: {
            type: Map,
            of: mongoose.Schema.Types.Mixed
        }  
    },
    powerFeatures: {
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

const weightingScaleSchema = new mongoose.Schema({
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


const glucometer = mongoose.model("glucometer", glucometerSchema);
const bpMonitor = mongoose.model("bpMonitor", bpMonitorSchema);
const vapourizer = mongoose.model("vapourizer", vapourizerSchema);
const pulseOximeter = mongoose.model("pulseOximeter", pulseOximeterSchema);
const weightingScale = mongoose.model("weightingScale", weightingScaleSchema);

module.exports = { glucometer, bpMonitor, vapourizer, pulseOximeter, weightingScale }