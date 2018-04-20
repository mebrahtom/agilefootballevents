import Fixtures from '../../model/Fixtures'

export function getAllMatches(){
  return (dispatch, getState) => {
    return Fixtures.getPlayedMatches().then((data) => {
      return dispatch(dispatchGetAllMatches(data))
    })
  }
}

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
