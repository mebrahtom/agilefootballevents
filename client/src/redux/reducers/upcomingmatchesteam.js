function upcomingmatchesteam(state = [], action){
  switch(action.type){
    case 'GET_ALL_UPCOMING_MATCHES_TEAM':
      const newState = action.upcomingmatchesteam
      return newState
    default:
      return state
  }
}

export default upcomingmatchesteam
