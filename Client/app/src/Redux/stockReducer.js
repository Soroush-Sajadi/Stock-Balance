
  const initialState =  []

  export const stockReducer = (state = initialState , action) => {
    switch(action.type) {
      case "STOCK": {
        return action.payload
      }
      default: 
        return state
    }
  }