
function groupresults(state = [], action){
  switch(action.type){
    case 'GET_ALL_GROUP_RESULTS':
      const newState = action.groupresults
      return newState
    default:
      return state
  }
}

export default groupresults
