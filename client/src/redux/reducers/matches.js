
function matches(state = [], action){
  switch(action.type){
    case 'GET_ALL_MATCHES':
      const newState = action.matches
      return newState
    default:
      return state
  }
}

export default matches
