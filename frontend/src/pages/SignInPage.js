import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        //Signin action
    };
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter Email"required onChange={(e) => setEmail(e.target.value)}></input>
                    <label htmlFor="email">Email Password</label>
                    <input type="password" id="password" placeholder="Enter Password"required onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Sign In
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        <h1 className="reg"> New to Volga<br /> <Link to="/register">Register Here</Link></h1>
                          
                    </div>
                </div>
            </form>
        </div>
    )
}
