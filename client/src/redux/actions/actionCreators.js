import Fixtures from '../../model/Fixtures'
import Teams from '../../model/Teams'
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
