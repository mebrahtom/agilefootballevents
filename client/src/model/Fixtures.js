import Service from '../service/Service'

// Model for interacting with service. Handles getting and setting of matches
class Fixtures {
  static getPlayedMatches(){
    var route = '/fixtures/playedMatches'
    return Service.get(route).then(function(matches){
      return matches
    })
  }
}

export default Fixtures
