import Fixtures from '../../model/Fixtures'
import Teams from '../../model/Teams'
import Admin from '../../model/Admin'
// ActionCreator which performs actions requested in containers + components

// Method calling the fixtures model to get all matches then dispatch
export function getAllMatches(){
  return (dispatch, getState) => {
    return Fixtures.getPlayedMatches().then((data) => {
      return dispatch(dispatchGetAllMatches(data))
    })
  }
}

// Method sending received data to reducer for showing it within store
export function dispatchGetAllMatches(matches){
  return {
    type: 'GET_ALL_MATCHES',
    matches
  }
}

export function getAllMatchesTeam(abr){
  return (dispatch, getState) => {
    return Fixtures.getPlayedMatchesTeam(abr).then((data) => {
      return dispatch(dispatchGetAllMatchesTeam(data))
    })
  }
}

// Method sending received data to reducer for showing it within store
export function dispatchGetAllMatchesTeam(matchesteam){
  return {
    type: 'GET_ALL_MATCHES_TEAM',
    matchesteam
  }
}

export function getAllUpcomingMatchesTeam(abr){
  return (dispatch, getState) => {
    return Fixtures.getUpcomingMatchesTeam(abr).then((data) => {
      return dispatch(dispatchGetAllUpcomingMatchesTeam(data))
    })
  }
}

export function dispatchGetAllUpcomingMatchesTeam(upcomingmatchesteam){
  return {
    type: 'GET_ALL_UPCOMING_MATCHES_TEAM',
    upcomingmatchesteam
  }
}

export function getAllUpcomingMatches(){
  return (dispatch, getState) => {
    return Fixtures.getUpcomingMatches().then((data) => {
      return dispatch(dispatchGetAllUpcomingMatches(data))
    })
  }
}

export function dispatchGetAllUpcomingMatches(upcomingmatches){
  return {
    type: 'GET_ALL_UPCOMING_MATCHES',
    upcomingmatches
  }
}

export function getAllGroups(){
  return (dispatch, getState) => {
    return Fixtures.getGroups().then((data) => {
      return dispatch(dispatchGetAllGroups(data))
    })
  }
}

export function dispatchGetAllGroups(groups){
  return {
    type: 'GET_ALL_GROUPS',
    groups
  }
}

export function getAllgroupresults(){
  return (dispatch, getState) => {
    return Fixtures.getAllgroupresults().then((data) => {
      return dispatch(dispatchGetAllgroupresults(data))
    })
  }
}

export function dispatchGetAllgroupresults(groupresults){
  return {
    type: 'GET_ALL_GROUP_RESULTS',
    groupresults
  }
}


export function getSquad(abr){
  return (dispatch, getState) => {
    return Teams.getSquad(abr).then((data) => {
      return dispatch(dispatchGetSquad(data))
    })
  }
}

export function dispatchGetSquad(squad){
  return {
    type: 'GET_SQUAD_COUNTRY',
    squad
  }
}

export function getAllCountries(){
  return (dispatch, getState) => {
    return Teams.getAllCountries().then((data) => {
      return dispatch(dispatchGetAllCountries(data))
    })
  }
}

export function dispatchGetAllCountries(countries){
  return {
    type: 'GET_ALL_COUNTRIES',
    countries
  }
}

export function getPlayer(id){
  return (dispatch, getState) => {
    return Teams.getPlayer(id).then((data) => {
      return dispatch(dispatchGetPlayer(data))
    })
  }
}

export function dispatchGetPlayer(player){
  return {
    type: 'GET_PLAYER',
    player
  }
}


export function getCountryInfo(abr){
  return (dispatch, getState) => {
    return Teams.getCountryInfo(abr).then((data) => {
      return dispatch(dispatchGetCountryInfo(data))
    })
  }
}

export function dispatchGetCountryInfo(countryinfo){
  return {
    type: 'GET_COUNTRY_INFO',
    countryinfo
  }
}

export function loginAdmin(username, password) {
  return (dispatch, getState) => {
    return Admin.loginAdmin(username, password).then((data) => {
      return dispatch(dispatchLoginAdmin(data))
    })
  }
}

export function dispatchLoginAdmin(user) {
  return {
    type: 'LOGIN_ADMIN',
    user
  }
}
