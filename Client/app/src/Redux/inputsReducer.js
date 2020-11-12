
  const initialState =  {status: '', code: ''}

  export const inputsReducer = (state = initialState , action) => {
    switch(action.type) {
      case "INPUTS": {
        return action.payload
      }
      default: 
        return state
    }
  }