import Service from '../service/Service'

class Locations {
  static getLocation(type, id) {
    var route = '/locations/' + type + '/' + id
    return Service.get(route).then(function(location) {
      return location
    })
  }
}

export default Locations

/*static getUpcomingMatchesTeam(abr){
  var route = '/fixtures/matchfixtures/' + abr
  return Service.get(route).then(function(upcomingmatchesteam){
    return upcomingmatchesteam
  })
}*/