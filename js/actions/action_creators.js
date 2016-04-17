export function setState(state){
  return {
    type : 'SET_STATE',
    state
  }
}

export function vote(value){
  return {
    type : 'VOTE',
    value : value
  }
}
