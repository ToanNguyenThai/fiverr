import React from 'react'
import { useState } from 'react'
import style from './signup.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { api_url, tokenByClass } from '../../../config'
import useMediaQuery from '../../../customHooks/useMediaQuery'
export default function SignUp() {
    const isDesktop = useMediaQuery("(min-width:1140px)");
    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [fullName, setFullName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const account = {
            "first_name": fullName,
            "last_name": fullName,
            "email": email,
            "password": password,
            "phone": phone,
            "skill": [],
            "certification": [],
            "birthday": "2022-01-01",
            "gender": true,
            "type": "CLIENT",
            "address": "Ho Chi Minh City"
        }
        axios({
            method: 'POST',
            url: `${api_url}/auth/signup`,
            headers: {
                'tokenByClass': tokenByClass
            },
            data: account
        }).then((response) => {
            if (response.status == 200) {
                alert('Đăng ký thành công !')

            }
        }, (error) => {
            alert('Đăng ký thất bại !')
        });

    }
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
                                            <input onChange={(e) => setUserName(e.target.value)} id="Username" type="text" placeholder="User name" required autofocus className="form-control  border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input onChange={(e) => setPassword(e.target.value)} id="inputPassword" type="password" placeholder="Password" required className="form-control  border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input onChange={(e) => setRePassword(e.target.value)} id="RePassword" type="password" placeholder="Re-enter password" required className="form-control  border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input onChange={(e) => setFullName(e.target.value)} id="fullName" type="text" placeholder="Full name" required autofocus className="form-control  border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input onChange={(e) => setEmail(e.target.value)} id="inputEmail" type="email" placeholder="Email address" required autofocus className="form-control  border-0 shadow-sm px-4" />
                                        </div>

                                        <div className="form-group mb-3">
                                            <input onChange={(e) => setPhone(e.target.value)} id="phone" type="text" placeholder="Phone number" required autofocus className="form-control  border-0 shadow-sm px-4" />
                                        </div>

                                        <button onClick={handleSubmit} className={`${style.btn} btn btn-block text-uppercase text-bold mb-2  shadow-sm btn-success`}>Sign up</button>

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
