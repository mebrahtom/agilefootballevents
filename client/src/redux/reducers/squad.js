function squad(state = [], action){
  switch(action.type){
    case 'GET_SQUAD_COUNTRY':
      const newState = action.squad
      return newState
    default:
      return state
  }
}

export default squad
