import React from 'react'
import './Login.css'

function Login() {
    return (
        <div>
            <div className='main'>
                <div className='sub-main'>
                    <div className="login">
                        <h1>Login</h1>
                        <input type="text" name="email"  placeholder="Email"></input>
                        <input type="password" name="password" placeholder="Password" ></input>
                        <div className="button" >Login</div>
                        <div>or</div>
                        <div className="button" >Register</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login