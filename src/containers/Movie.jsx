import React from 'react'
import MoviePic from '../Assets/Movie.jpg'
import { useSelector } from 'react-redux'
import DeleteModal from '../Components/Modal/DeleteModal'
import { Link } from 'react-router-dom'
export default function Movie() {
    //get movies from redux
    const state = useSelector(state => state.Movie)
    return (
        <div className='mx-44 mt-5'>
            <div className='flex justify-center my-5'>
                <h1 className='text-4xl font-medium font-serif'>Movie List</h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    state.map((Data, index) => {
                        return (
                            <div className="bg-white p-6 rounded-lg shadow-lg" key={index}>
                                <img src={MoviePic} alt="Movie" />
                                <div className='flex justify-between align-middle items-center my-3'>
                                    <h2 className="text-3xl font-mono font-bold mb-2 text-gray-800">{Data.name}</h2>
                                    <div className=' flex gap-1'>
                                        <DeleteModal ID={Data.id} />
                                        <Link to={`updatemovie/${Data.id}`}>
                                            <span className='cursor-pointer' >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-green-500 w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <p className="text-gray-700 font-mono">{Data.desc}</p>
                            </div>
                        )
                    })}
            </div>

        </div>
    )
}
