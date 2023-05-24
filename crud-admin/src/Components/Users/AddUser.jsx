import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddUser() {
    const [user, setUser] = useState({
        username: '',
        email: '',
        age: '',
        phone: '',
    })
    //sử dụng navigate để chuyển trang
    const navigate = useNavigate()
    // Sử dụng Destructuring

    const { username, email, age, phone } = user
    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:7777/users', user)
        navigate('/')
    }
    return (
        <div>
            <div className='w-75 mx-auto shadow p-5'>
            <button type="button" className="btn btn-success AddUser">AddUser</button>
        
                <form action="" className='adduser' onSubmit={handleSubmit}>
                    <label htmlFor="username">Username: </label> <br />
                    <input
                        type="text"
                        id='username'
                        name='username'
                        value={username}
                        onInput={(e) => handleInput(e)} /> <br />
                    <label htmlFor="email">Email:</label> <br />
                    <input
                        type="text"
                        id='email'
                        name='email'
                        value={email}
                        onInput={(e) => handleInput(e)} /> <br />
                    <label htmlFor="age">Age:</label> <br />
                    <input
                        type="text"
                        id='age'
                        name='age'
                        value={age}
                        onInput={(e) => handleInput(e)} /> <br />
                    <label htmlFor="phone">Phone:</label> <br />
                    <input
                        type="text"
                        id='phone'
                        name='phone'
                        value={phone}
                        onInput={(e) => handleInput(e)} /> <br /> <br />
                    <button type="submit" className="btn btn-success">Success</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser