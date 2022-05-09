import React from 'react'
import { useState } from 'react'
import style from './signup.module.css'
import { Link } from 'react-router-dom'
import useMediaQuery from '../../../customHooks/useMediaQuery'
export default function SignUp() {
    const isDesktop = useMediaQuery("(min-width:1140px)");
    return (

        <div className="container-fluid">
            <div className="row no-gutter">
                {/* The image half */}
                {isDesktop
                    ? <div className={`${style.bg_image} col-md-6 d-none d-md-flex `} />
                    : ""
                }
                {/* The content half */}
                <div className="col-md-12 col-xl-6 bg-light">
                    <div className={`${style.signup} d-flex align-items-center py-5 `}>
                        {/* Demo content*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className={`${style.title} display-4`} >Sign Up</h3>

                                    <form className={style.myForm}>
                                        <div className="form-group mb-3">
                                            <input id="Username" type="text" placeholder="User name" required autofocus className="form-control  border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required className="form-control  border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input id="RePassword" type="password" placeholder="Re-enter password" required className="form-control  border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input id="fullName" type="text" placeholder="Full name" required autofocus className="form-control  border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required autofocus className="form-control  border-0 shadow-sm px-4" />
                                        </div>

                                        <div className="form-group mb-3">
                                            <input id="phone" type="text" placeholder="Phone number" required autofocus className="form-control  border-0 shadow-sm px-4" />
                                        </div>

                                        <button type="submit" className={`${style.btn} btn  btn-block text-uppercase mb-2  shadow-sm`}>Sign in</button>

                                    </form>
                                    <div className={style.footer_nav}>
                                        <Link to='/'>Back to Home</Link>
                                        <Link to='/Login'>Login</Link>
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
