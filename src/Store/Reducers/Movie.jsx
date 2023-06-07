const initialState = []
const Movie = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload]
        case "DELETE":
            return state.filter(state => state.id !== action.payload)
        case "UPDATE":
            return state.map(item => {
                if (item.id === action.payload.id) {
                  return { ...item, ...action.payload };
                }
                return item;
              });         
        default:
            return state
    }
}

export default Movie