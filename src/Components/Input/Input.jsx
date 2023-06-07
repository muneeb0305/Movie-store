import React from 'react'

export default function Input(props) {
    return (
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">{props.label}</label>
            <input {...props} className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-blue-300" required />
        </div>
    )
}
