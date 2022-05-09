import React from 'react'
import { useState } from 'react'
import style from './login.module.css'
import { Link } from 'react-router-dom'
export default function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userName);
        console.log(password);
    }
    return (

        <div className="container-fluid">
            <div className="row no-gutter">
                {/* The image half */}
                <div className={`${style.bg_image} col-md-6 d-none d-md-flex `} />
                {/* The content half */}
                <div className="col-md-6 bg-light">
                    <div className={`${style.login} d-flex align-items-center py-5 `}>
                        {/* Demo content*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className={`${style.title} display-4`} >Login</h3>

                                    <form className={style.myForm}>
                                        <div className="form-group mb-3">
                                            <input onChange={e => setUserName(e.target.value)} id="inputEmail" type="email" placeholder="Email address" required autoFocus className="form-control  border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input onChange={e => setPassword(e.target.value)} id="inputPassword" type="password" placeholder="Password" required className="form-control  border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input id="customCheck1" type="checkbox" defaultChecked className="custom-control-input" />
                                            <label htmlFor="customCheck1" className="custom-control-label">Remember password</label>
                                        </div>
                                        <button onClick={handleSubmit} className={`${style.btn} btn  btn-block text-uppercase mb-2  shadow-sm`}>Sign in</button>

                                    </form>
                                    <div className={style.footer_nav}>
                                        <Link to='/'>Back to Home</Link>
                                        <Link to='/SignUp'>Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
