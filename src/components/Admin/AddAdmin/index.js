import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import style from './addAdmin.module.css'
import { api_url, tokenByClass, token } from '../../../config'
export default function AddAdmin() {
    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const account = {
            "name": fullName,
            "email": email,
            "password": password,
            "phone": phone,
            "birthday": "2022-01-01",
            "gender": true,
            "role": "ADMIN",
            "skill": [],
            "certification": []
        }
        axios({
            method: 'POST',
            url: `${api_url}/users`,
            headers: {
                'token': token,
                'tokenByClass': tokenByClass

            },
            data: account
        }).then((response) => {
            if (response.status == 200) {
                alert('Thêm quản trị viên thành công !')

            }
        }, (error) => {
            alert('Thêm quản trị viên thất bại !')
        });

    }
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className={`${style.whiteBG} content-header`}>
                <div className="container-fluid">
                    <h1 className="m-0 text-center">THÊM QUẢN TRỊ VIÊN</h1>
                    <form className={style.myForm}>
                        <div className="form-group">
                            <label htmlFor="name">Họ và tên</label>
                            <input onClick={(e) => setFullName(e.target.value)} className="form-control" id="name" aria-describedby="emailHelp" placeholder="Nguyen Van A" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Số điện thoại</label>
                            <input onClick={(e) => setPhone(e.target.value)} className="form-control" id="phone" aria-describedby="emailHelp" placeholder="0998877xxx" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input onClick={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="abc@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                            <input onClick={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="*****" />
                        </div>

                        <button onClick={handleSubmit} className={`${style.btn} btn btn-primary`}>THÊM QUẢN TRỊ VIÊN</button>
                    </form>

                </div>
            </div>


        </div >

    )
}
