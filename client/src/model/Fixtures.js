import Service from '../service/Service'

// Model for interacting with service. Handles getting and setting of matches
class Fixtures {
	static getPlayedMatches(){
		var route = '/fixtures/playedMatches'
		return Service.get(route).then(function(matches){
		  return matches
		})
	}

	static getPlayedMatchesTeam(abr){
		var route = '/fixtures/playedMatches/' + abr
		return Service.get(route).then(function(matchesteam){
		  return matchesteam
		})
	}

	static getUpcomingMatches(){
		var route = '/fixtures/matchfixtures'
		return Service.get(route).then(function(upcomingmatches){
		  return upcomingmatches
		})
	}

	static getUpcomingMatchesTeam(abr){
		var route = '/fixtures/matchfixtures/' + abr
		return Service.get(route).then(function(upcomingmatchesteam){
			return upcomingmatchesteam
		})
	}

	static getGroups(){
		var route = '/fixtures/groups'
		return Service.get(route).then(function(groups){
		  return groups
		})
	}

	static getAllgroupresults(){
		var route = '/fixtures/groupresults'
		return Service.get(route).then(function(groupresults){
		  return groupresults
		})
	}

	static getPlayerStats(){
		var route = '/fixtures/playerstats'
		return Service.get(route).then(function(playerstats){
		  return playerstats
		})
	}

	static getTeamStats(){
		var route = '/fixtures/teamstats'
		return Service.get(route).then(function(teamstats){
		  return teamstats
		})
	}
}

export default Fixtures
