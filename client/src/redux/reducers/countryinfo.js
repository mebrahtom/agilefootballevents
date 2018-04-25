function countryinfo(state = [], action){
  switch(action.type){
    case 'GET_COUNTRY_INFO':
      if(action.countryinfo.length === 0){
        return state;
      }
      const newState = action.countryinfo
      return newState
    default:
      return state
  }
}

export default countryinfo
