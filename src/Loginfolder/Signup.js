import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import './signup.css'
import { auth } from '../firebase'

export const Signup = ({setUserEmail}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const datapass = async (e) => {
        e.preventDefault()
        setUserEmail(email)
        const createuser = await createUserWithEmailAndPassword(auth,email,password)
        console.log(createuser);
        navigate('/login')
    }

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={datapass}>
                <h2>Signup</h2>
                <input 
                    type="text" 
                    placeholder="Enter your email" 
                    onChange={(event) => setEmail(event.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Enter your password" 
                    onChange={(event) => setPassword(event.target.value)} 
                />
                <input type="submit" value="Signup" />
                <Link to="/login">Already have an account? Login</Link>
            </form>
        </div>
    )
}
