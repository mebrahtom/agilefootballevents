function tablesize(state = [], action) {
  switch(action.type) {
    case 'GET_TABLE_SIZE':
      const newState = action.tablesize
      return newState
    default:
      return state
  }
}

export default tablesize
