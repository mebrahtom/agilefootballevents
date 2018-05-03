import Service from '../service/Service'
class Teams {
  static getSquad(abr){
    var route = '/countries/squad/' + abr
    return Service.get(route).then(function(squadresults){
      return squadresults
    })
  }

  static getAllCountries(){
    var route = '/countries';
    return Service.get(route).then(function(countries){
      return countries
    })
  }

  static getPlayer(id){
    var route = '/countries/player/' + id;
    return Service.get(route).then(function(player){
      return player
    })
  }

  static getCountryInfo(abr){
    var route = '/countries/info/' + abr;
    return Service.get(route).then(function(countryinfo){
      return countryinfo
    })
  }
}
export default Teams
