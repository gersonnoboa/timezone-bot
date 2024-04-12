import Region from '../models/region.js';

class UsernameMapper {
  static map(user) {
    switch (user) {
      case this.gerson:
        return Region.ESTONIA;
      case this.jaje:
        return Region.UK;
      case this.muertoCa:
      case this.muertoEu:
        return Region.CANADA;
      case this.wilson:
        return Region.NY;
      default:
        return Region.ECUADOR;
    }
  }
}

UsernameMapper.gerson = '319042254058684417';
UsernameMapper.jaje = '697142901729263739';
UsernameMapper.muertoCa = '149452987343962112';
UsernameMapper.muertoEu = '1190132962457555000';
UsernameMapper.wilson = '138696927112986624';

export default UsernameMapper;
