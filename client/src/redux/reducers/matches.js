// Handles all setting of data within the store

function matches(state = [], action){
  switch(action.type){
    // If performed action was of type GET_ALL_MATCHES set matches state to the new one
    case 'GET_ALL_MATCHES':
      const newState = action.matches
      return newState
    default:
      return state
  }

}

export default matches
