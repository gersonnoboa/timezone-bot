const Regions = require('../models/region');

class UsernameMapper {
  static map(user) {
    if (user === 'Gerson') {
      return Regions.ESTONIA;
    }

    if (user === 'JoseJarrin91') {
      return Regions.UK;
    }

    return Regions.ECUADOR;
  }
}

module.exports = UsernameMapper;
