import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADDMOVIE, UPDATEMOVIE } from '../../Store/Actions/index'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function Form() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //get id from url
    const { id } = useParams()
    //make isID boolean
    const isID = !!id
    //Get Movie Data which is going to update
    const movies = useSelector(state => state.Movie.find(data => data.id === Number(id)))
    //Form State
    const [form, setForm] = useState({
        name: '',
        desc: ''
    })
    //if isID true then set the form to display data
    useEffect(() => {
        if (isID) {
            setForm({
                name: movies.name,
                desc: movies.desc,
            })
        }
        // eslint-disable-next-line
    }, [isID])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        //if isID true then update it else Create new data
        if (isID) {
            dispatch(UPDATEMOVIE({ id: movies.id, ...form }))
        }
        else {
            const formData = { id: Date.now(), name: form.name, desc: form.desc }
            dispatch(ADDMOVIE(formData))
        }
        navigate('/')
    }
    return (
        <>
            <h1 className='flex justify-center text-4xl font-medium font-serif py-5'>{isID ? 'Update' : 'Add'} Movie</h1>
            <div className='flex justify-center mt-5'>
                <div className='grid grid-cols-1 w-2/4 bg-white p-8 rounded-lg shadow-md'>
                    <form onSubmit={handleSubmit}>
                        <Input type="text" id="name" name='name' onChange={handleChange} value={form.name} label={"Movie Name"} />
                        <Input type="text" id="desc" name='desc' onChange={handleChange} value={form.desc} label={"Movie description"} />
                        <Button type="submit" label={isID ? 'Update' : 'Add'} />
                    </form>
                </div>
            </div>
        </>
    )
}
