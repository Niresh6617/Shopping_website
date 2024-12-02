import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import './signup.css'

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

export const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const datapass = async (e) => {
        e.preventDefault()
        try {
            const createuser = await createUserWithEmailAndPassword(auth, email, password)
            console.log(createuser);
            navigate('/login')
        } catch (error) {
            console.error("Error signing up:", error.message)
        }
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
