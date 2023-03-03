import React, { useContext, useState } from 'react'
import MovieContext from '../Context/MovieContext'

export default function AddMovie() {
    const { AddMovies } = useContext(MovieContext)
    const [Movie, setMovie] = useState({
        name: "",
        desc: ""
    })
    const handleChange = (event) => {
        setMovie({...Movie, [event.target.name]: event.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        AddMovies(Movie.name, Movie.desc)
        setMovie({
            name: "",
            desc: ""
        })
    }
    return (
        <div className='flex justify-center mt-5'>
            <div className='grid grid-cols-1 w-2/4'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Movie Name</label>
                        <input type="text" id="name" name='name' onChange={handleChange} value={Movie.name} className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-blue-300" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900">Movie description</label>
                        <input type="text" id="desc" name='desc' onChange={handleChange} value={Movie.desc} className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-blue-300" required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                </form>
            </div>
        </div>
    )
}
