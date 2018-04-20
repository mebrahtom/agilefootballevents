
function groups(state = [], action){
  switch(action.type){
    case 'GET_ALL_GROUPS':
      const newState = action.groups
      return newState
    default:
      return state
  }
}

export default groups
