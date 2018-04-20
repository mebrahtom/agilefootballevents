import Service from '../service/Service'

class Teams {

  static getSquad(abr){
    var route = '/countries/squad/' + abr
    return Service.get(route).then(function(squadresults){
      return squadresults
    })
  }


}
export default Teams
