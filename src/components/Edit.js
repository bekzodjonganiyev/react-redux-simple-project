import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { UPDATE_CONTACT } from '../redux/types'
import { toast } from 'react-toastify'

const Edit = () => {

  const { id } = useParams()
  const contacts = useSelector(state => state)
  const currentStudent = contacts.find(contact => contact.id === parseInt(id))

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")

  const history = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentStudent) {
      setName(currentStudent.name)
      setEmail(currentStudent.email)
      setNumber(currentStudent.number)
    }
  }, [currentStudent])

  const editStudent = (e) => {
    e.preventDefault()

    const checkEmail = contacts.find(elem => elem.id !== parseInt(id) && elem.email === email)
    console.log(checkEmail);
    const checkNumber = contacts.find(elem => elem.id !== parseInt(id) && parseInt(elem.number) === parseInt(number))
    console.log(checkNumber);

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
      id:parseInt(id),
      name,
      email,
      number
    }

    dispatch({ type: UPDATE_CONTACT, payload: data })
    toast.success("Student edited successfully!")
    history("/")
  }

  return (
    <div className='container' >
      {
        currentStudent
          ? (
            <div className='row'>
              <h1 className='display-3 text-center'>
                Edit Student id:{parseInt(id)}
              </h1>
              <div className='col-md-6 shadow mx-auto p-5'>
                <form onSubmit={editStudent}>
                  <div className='input-group'>
                    <input
                      type="text"
                      placeholder='Name'
                      className='form-control'
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>

                  <div className='input-group'>
                    <input
                      type="text"
                      placeholder='Email'
                      className='form-control my-3'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>

                  <div className='input-group'>
                    <input
                      type="text"
                      placeholder='Number'
                      className='form-control'
                      value={number}
                      onChange={e => setNumber(e.target.value)}
                    />
                  </div>

                  <div className='input-control d-grid gap-2'>
                    <input type="submit" value="Edit Student" className='btn btn-block btn-dark mt-3 ' />
                    <Link to="/" className='btn btn-danger'>
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>

          )
          :'' 
          // (<div class="alert alert-warning alert-dismissible fade show" role="alert">
          //   <strong>Ooops</strong> Student not found with id:{id}
          // </div>)
      }

    </div >

  )
}

export default Edit