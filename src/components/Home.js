import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { toast } from 'react-toastify'
import { DELETE_CONTACT } from '../redux/types'

const Home = () => {

    const contacts = useSelector(state => state)
    const dispatch = useDispatch()
    const deleteContact = (id) => {
        dispatch({type:DELETE_CONTACT, payload:id})
        toast.success("Contaxt deleted successfully!")
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 my-5 d-flex justify-content-end'>
                    <Link to='/add' className='btn btn-outline-dark'>
                        Add Contact
                    </Link>
                </div>

                <div className='col-md-6 mx-auto '>
                    <table className='table table-hover'>
                        <thead className='text-white bg-dark text-center'>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Number</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                contacts.map((contact, id) =>
                                (
                                    <tr key={id} className='text-center'>
                                        <td>{id + 1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td>
                                            <Link to={`/edit/${contact.id}`} className='btn btn-primary btn-sm'>
                                                Edit
                                            </Link>
                                            <button
                                                type='button'
                                                className='btn btn-sm btn-danger mx-2'
                                                onClick={() => deleteContact(contact.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home