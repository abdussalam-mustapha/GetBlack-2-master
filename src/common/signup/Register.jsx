import React from 'react'

const Register = () => {
    return (
        <div className='register_section'>
            <section className="signup">
                <form>
                    {/* <label htmlFor="username">Username:</label> */}
                    <input
                        type="text"
                        id="username"
                        placeholder='Username'
                        // ref={userRef}
                        autoComplete="off"
                        // onChange={(e) => setUser(e.target.value)}
                        // value={user}
                        required
                    />
                    {/* <label htmlFor="password">Password:</label> */}
                    <input
                        type="password"
                        id="password"
                        placeholder='Password'
                        // ref={userRef}
                        // onChange={(e) => setPwd(e.target.value)}
                        // value={pwd}
                        required
                    />
                    <button className='btn btn-register'>Sign In</button>
                </form>
                <div className="register_flex">
                    <p>
                        Need an account?
                    </p>

                    <span className="line">
                        {/* put router link */}
                        <a href="#">Sign Up</a>
                    </span>

                </div>
            </section>
        </div>
    )
}

export default Register