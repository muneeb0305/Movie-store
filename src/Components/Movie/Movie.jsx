import React, { useContext } from 'react'
import MovieContext from '../Context/MovieContext'
export default function Movie() {
    const { Data } = useContext(MovieContext)
    console.log(Data)
    return (
        <div className='mx-44 mt-5'>
            <div className='my-5'>
                <h1 className='text-3xl font-medium'>Movie List</h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {Data.map((Data) => {
                    return (
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-2 text-gray-800">{Data.name}</h2>
                            <p className="text-gray-700">{Data.desc}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
