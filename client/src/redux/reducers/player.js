function player(state = [], action){
  switch(action.type){
    case 'GET_PLAYER':
      const newState = action.player
      return newState
    default:
      return state
  }
}

export default player
