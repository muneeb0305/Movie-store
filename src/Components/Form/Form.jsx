import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADDMOVIE } from '../../Store/Actions/index'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { useParams } from 'react-router-dom'

export default function Form() {
    const { id } = useParams()
    const isID = !!id
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        name: '',
        desc: ''
    })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = { id: Date.now(), name: form.name, desc: form.desc }
        dispatch(ADDMOVIE(formData))
        setForm({
            name: '',
            desc: ''
        })
    }
    return (
        <>
            <h1 className='flex justify-center text-4xl font-medium font-serif py-5'>{isID ? 'Update' : 'Add'} Movie</h1>
            <div className='flex justify-center mt-5'>
                <div className='grid grid-cols-1 w-2/4 bg-white p-8 rounded-lg shadow-md'>
                    <form onSubmit={handleSubmit}>
                        <Input type="text" id="name" name='name' onChange={handleChange} value={form.name} label={"Movie Name"} />
                        <Input type="text" id="desc" name='desc' onChange={handleChange} value={form.desc} label={"Movie description"} />
                        <Button type="submit" label={"Add"} />
                    </form>
                </div>
            </div>
        </>
    )
}
