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
