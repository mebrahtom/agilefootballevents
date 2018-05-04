import Service from '../service/Service'

class Locations {
  static getLocations() {
    var route = '/locations'
    return Service.get(route).then(function(locations) {
      return locations
    })
  }

  static getTableSize(type) {
    var route = '/tablesize/' + type
    return Service.get(route).then(function(tablesize) {
      return tablesize
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