const Regions = require("../models/region");

class UsernameMapper {
    static map(user) {
        if (user === 'Gerson') {
            return Regions.ESTONIA;
        } else if (user === 'JoseJarrin91') {
            return Regions.UK;
        } else {
            return Regions.ECUADOR;
        }
    }
}

module.exports = UsernameMapper;