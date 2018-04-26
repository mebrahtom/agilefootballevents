function matchesteam(state = [], action){
  switch(action.type){
    // If performed action was of type GET_ALL_MATCHES set matches state to the new one
    case 'GET_ALL_MATCHES_TEAM':
      const newState = action.matchesteam
      return newState
    default:
      return state
  }
}

export default matchesteam
