
function playerstats(state = [], action){
  switch(action.type){
    case 'GET_PLAYER_STATS':
      const newState = action.playerstats
      return newState
    default:
      return state
  }
}

export default playerstats
