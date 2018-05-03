function admin(state = [], action){
  switch(action.type){
    case 'LOGIN_ADMIN':
      const newState = action.user
      return newState
    default:
      return state
  }
}

export default admin
