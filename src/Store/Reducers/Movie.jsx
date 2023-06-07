const initialState = []
const Movie = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload]
        case "DELETE":
            return state.filter(state => state.id !== action.payload)
        default:
            return state
    }
}

export default Movie