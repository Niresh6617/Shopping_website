import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import './login.css'
import { auth } from '../firebase'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const datapass = async (e) => {
        e.preventDefault()
        const createuser = await signInWithEmailAndPassword(auth,email,password)
        console.log(createuser);
        navigate('/')
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={datapass}>
                <h2>Login</h2>
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
                <input type="submit" value="Login" />
                <Link to="/signup">Don't have an account? Signup</Link>
            </form>
        </div>
    )
}
