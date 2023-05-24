import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Modal() {
    const [user, setUser] = useState({
        username: '',
        email: '',
        age: '',
        phone: '',
    })
    console.log(user);
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


    return (
        <div>
          
           
        </div>
    )
}

export default Modal