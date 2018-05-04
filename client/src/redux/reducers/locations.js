function locations(state = [], action){
  switch(action.type){
    case 'GET_LOCATIONS':
      const newState = action.locations
      return newState
    default:
      return state
  }
}

export default locations
