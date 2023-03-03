import React, { useState } from 'react'
import MovieContext from './MovieContext'

function MovieState(props) {
    const [Data, setData] = useState([])
    const AddMovies = (movieName, movieDesc) => {
        setData([...Data, { name: movieName, desc: movieDesc }]);
      };
    console.log(Data)
    return (
        <MovieContext.Provider value={{ Data, AddMovies }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieState