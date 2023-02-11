import React from 'react'
import { useRef, useState, useEffect } from "react"

const Login = () => {

    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState("")
    const [pwd, setPwd] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [success, setSuccess] = useState("false")

    // useEffect(() => {
    //     useRef.current.focus();
    // }, [])

    useEffect(() => {
        setErrMsg();
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser("");
        setPwd("");
        setSuccess(true)
    }

    return (
        <>
            <section className='login-section'>
                {
                    success ?
                        (
                            <section className='login'>
                                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                <h1 className="login_header">Sign in</h1>
                                <form onSubmit={handleSubmit}>
                                    {/* <label htmlFor="username">Username:</label> */}
                                    <input
                                        type="text"
                                        id="username"
                                        placeholder='Username'
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setUser(e.target.value)}
                                        value={user}
                                        required
                                    />
                                    {/* <label htmlFor="password">Password:</label> */}
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder='Password'
                                        ref={userRef}
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        required
                                    />
                                    <button className='btn btn-login'>Sign In</button>
                                </form>
                                <div className="sign_flex">
                                    <p>
                                        Need an account?
                                    </p>

                                    <span className="line">
                                        {/* put router link */}
                                        <a href="#">Sign Up</a>
                                    </span>

                                </div>
                            </section>
                        ) :
                        (
                            <section>
                                <h1>you're logged in</h1>
                                <br />
                                <p>
                                    <a href="#">Go to home</a>
                                </p>
                            </section>
                        )
                }
            </section>
        </>
    )
}

export default Login