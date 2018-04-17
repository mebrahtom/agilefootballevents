
function upcomingmatches(state = [], action){
  switch(action.type){
    case 'GET_ALL_UPCOMING_MATCHES':
      const newState = action.upcomingmatches
      return newState
    default:
      return state
  }
}

export default upcomingmatches
