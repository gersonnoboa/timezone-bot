const Regions = require("../models/region");

class RegionMapper {
    static map(region) {
        switch (region) {
            case Regions.ESTONIA: return "Europe/Tallinn";
            case Regions.UK: return "Europe/London";
            case Regions.ECUADOR: return "America/Guayaquil";
            default: return "UTC";
        }
    }
}

module.exports = RegionMapper;