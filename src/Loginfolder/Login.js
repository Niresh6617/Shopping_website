import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import './login.css'

// Firebase configuration
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};

// Initialize Firebase app and authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const datapass = async (e) => {
        e.preventDefault()
        try {
            const createuser = await signInWithEmailAndPassword(auth, email, password)
            console.log(createuser);
            navigate('/')
        } catch (error) {
            console.error("Error logging in:", error.message)
        }
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
