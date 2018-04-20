import Fixtures from '../../model/Fixtures'
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
