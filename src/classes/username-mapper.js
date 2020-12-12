const regions = require("../models/region");

class UsernameMapper {
    static map(user) {
        if (user === 'Gerson') {
            return regions.ESTONIA;
        } else if (user === 'JoseJarrin91') {
            return regions.UK;
        } else {
            return regions.ECUADOR;
        }
    }
}

module.exports = UsernameMapper;