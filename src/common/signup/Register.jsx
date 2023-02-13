import React from 'react'

const Register = () => {

    const imageUrl =
        "https://res.cloudinary.com/dirwn9yno/image/upload/v1676207185/getblack/istockphoto-1346094859-612x612_xoyuk2.jpg"

    return (
        <div className='register_section'>

            <div
                style={{ background: `url(${imageUrl}) center center / cover no-repeat` }}
                className="vendors-img career-pos"
            >
                <section className="signup">
                    <h1 className='register_header'></h1>
                    <form>
                        {/* <label htmlFor="username">Username:</label> */}
                        <input
                            type="text"
                            id="username"
                            placeholder='Username'
                            autoComplete="off"
                            required
                        />
                        {/* <label htmlFor="password">Password:</label> */}
                        <input
                            type="password"
                            id="password"
                            placeholder='Password'
                            required
                        />
                        <input
                            type="email"
                            id="mail"
                            placeholder='email address'
                            required
                        />
                        <button className='btn btn-register'>Sign Up</button>
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
        </div>
    )
}

export default Register