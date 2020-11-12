
  const initialState =  false

  export const switchReducer = (state = initialState , action) => {
    switch(action.type) {
      case "SWITCH": {
        return action.payload
      }
      default: 
        return state
    }
  }