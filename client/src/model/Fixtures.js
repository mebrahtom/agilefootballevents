import Service from '../service/Service'

class Fixtures {
	static getPlayedMatches(){
		var route = '/fixtures/playedMatches'
		return Service.get(route).then(function(matches){
		  return matches
		})
	}

	static getUpcomingMatches(){
		var route = '/fixtures/matchfixtures'
		return Service.get(route).then(function(upcomingmatches){
		  return upcomingmatches
		})
	}
}

export default Fixtures
