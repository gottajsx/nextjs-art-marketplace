"use client"

import "@styles/Register.scss";
import { FcGoogle } from "react-icons/fc";


const Register = () => {

    const handleChange = () => {
    }

    const handleSubmit = () => {
    }
    
    return (
        <div className="register">
            <img 
                src="/assets/register.jpg" 
                alt="register" 
                className="register_decor"    
            />
            <div className="register_content">
                <form className="register_content_form" onSubmit={handleSubmit}>
                    <input 
                        placeholder="Username" 
                        name="username" 
                        value={FormData.username}
                        onChange={handleChange}
                        required 
                    />
                    <input 
                        placeholder="Email" 
                        type="email"
                        name="email" 
                        value={FormData.email}
                        onChange={handleChange}
                        required 
                    />
                    <input 
                        placeholder="Password"
                        type="password" 
                        name="password" 
                        value={FormData.email}
                        onChange={handleChange}
                        required 
                    />
                    <input 
                        placeholder="Confirm Password" 
                        type="password"
                        name="confirmPassword"
                        value={FormData.email}
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        id="image" 
                        type="file" 
                        name="profileImage" 
                        accept="image/" 
                        style={{ display: "none" }}
                        required 
                    />
                    <label htmlFor="image">
                        <img src="/assets/addImage.png" alt="add profile" />
                        <p>Upload Profile Photo</p>
                    </label>
                    <button type="submit">
                        Register
                    </button>
                </form>
                <button type="button" onClick={() => {}} className="google">
                    <p>Log In with Google</p>
                </button>
                <a href="/login">Already have an account ? Log In Here</a>
            </div>
        </div>
    )
}

export default Register;