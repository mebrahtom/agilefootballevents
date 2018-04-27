function location(state = [], action){
  switch(action.type){
    case 'GET_LOCATION':
      const newState = action.location
      return newState
    default:
      return state
  }
}

export default location
