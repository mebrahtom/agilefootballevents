function countries(state = [], action){
  switch(action.type){
    case 'GET_ALL_COUNTRIES':
      const newState = action.countries
      return newState
    default:
      return state
  }
}

export default countries
