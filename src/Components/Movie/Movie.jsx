import React, { useContext } from 'react'
import MovieContext from '../Context/MovieContext'
import MoviePic from '../../Assets/Movie.jpg'
export default function Movie() {
    const { state } = useContext(MovieContext)
    return (
        <div className='mx-44 mt-5'>
            <div className='flex justify-center my-5'>
                <h1 className='text-4xl font-medium font-serif'>Movie List</h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {state.movieList.map((Data, index) => {
                    return (
                        <div className="bg-white p-6 rounded-lg shadow-lg" key={index}>
                            <img src={MoviePic} alt="Movie" />
                            <div className='flex justify-center my-3'>
                                <h2 className="text-3xl font-mono font-bold mb-2 text-gray-800">{Data.name}</h2>
                            </div>
                            <p className="text-gray-700 font-mono">{Data.desc}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
