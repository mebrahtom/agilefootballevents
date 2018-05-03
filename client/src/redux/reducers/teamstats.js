
function teamstats(state = [], action){
  switch(action.type){
    case 'GET_TEAM_STATS':
      const newState = action.teamstats
      return newState
    default:
      return state
  }
}

export default teamstats
