import Service from '../service/Service'

class Fixtures {
  static getPlayedMatches(){
    var route = '/fixtures/playedMatches'
    return Service.get(route).then(function(matches){
      return matches
    })
  }
}

export default Fixtures
