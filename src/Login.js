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
                        <button className="button" >Login</button>
                        <div>or</div>
                        <button className="button" >Register</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login