import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"
import { ADD_CONTACT } from '../redux/types'

const Add = () => {
    const history = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    const contacts = useSelector(state => state)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        const checkEmail = contacts.find(elem => elem.email === email && elem)
        const checkNumber = contacts.find(elem => elem.number === parseInt(number))

        if (!name || !email || !number) {
            return toast.warning("Please fill in all fields")
        }

        if (checkEmail) {
            return toast.error("This email is already exist")
        }

        if (checkNumber) {
            return toast.error("This number is already exist")
        }

        const data = {
            id:contacts[contacts.length - 1]?.id + 1,
            name,
            email,
            number
        }

        dispatch({ type: ADD_CONTACT, payload: data })
        toast.success("Student added successfully!")
        history("/")
    }

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='display-3 text-center'>
                    Add Contact
                </h1>

                <div className='col-md-6 shadow mx-auto p-5'>
                    <form onSubmit={handleSubmit}>
                        <div className='input-group'>
                            <input
                                type="text"
                                placeholder='Name'
                                className='form-control'
                                value={name}
                                onChange={e => setName(e.target.value)} />
                        </div>

                        <div className='input-group'>
                            <input
                                type="text"
                                placeholder='Email'
                                className='form-control my-3'
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className='input-group'>
                            <input
                                type="number"
                                placeholder='Number'
                                className='form-control'
                                value={number}
                                onChange={e => setNumber(e.target.value)} />
                        </div>

                        <div className='input-control d-grid gap-2'>
                            <input type="submit" value="Add Student" className='btn btn-block btn-dark mt-3 ' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add