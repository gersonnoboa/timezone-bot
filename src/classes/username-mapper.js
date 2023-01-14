import Region from '../models/region.js';

class UsernameMapper {
  static map(user) {
    switch (user) {
      case 'Gerson':
        return Region.ESTONIA;
      case 'JoseJarrin91':
        return Region.UK;
      case 'RayBryceCA':
        return Region.CANADA;
      case 'Hario':
        return Region.NY;
      default:
        return Region.ECUADOR;
    }
  }
}

export default UsernameMapper;
