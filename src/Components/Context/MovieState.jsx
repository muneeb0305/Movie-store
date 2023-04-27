import React from 'react'
import MovieContext from './MovieContext'
import { useReducer } from 'react'

function MovieState(props) {
    const initialState = { name: "", desc: "", movieList: [] }
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADDMOVIE":
                return { ...state, movieList: [...state.movieList, action.formData] }
            case "UPDATEFIELD":
                return {...state, [action.formField]: action.fieldValue}
            default:
                throw new Error("Invalid Action Case")
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    return (
        <MovieContext.Provider value={{ state, dispatch }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieState