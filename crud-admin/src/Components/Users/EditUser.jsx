import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function EditUser() {
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
    // sử dụng useParam
    const { id } = useParams()
    // lấy dữ liệu người dùng từ homepage
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:7777/users/${id}`)
        setUser(result.data)
    }
    useEffect(() => {
        loadUser()
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:7777/users/${id}`, user)
        navigate('/')
    }
    return (
        <div>

            <div className='w-75 mx-auto shadow p-5'>
                <button className='btn btn-warning AddUser' >EditUser</button>
                <form action="" className='adduser' onSubmit={handleUpdate}>
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
                    <button type="submit" className="btn btn-warning">Success</button>
                </form>
            </div>

        </div>
    )
}

export default EditUser