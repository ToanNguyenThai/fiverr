import React, { useState, useEffect } from 'react'
import style from './editUser.module.css'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { api_url, tokenByClass } from '../../../config'
import { useSelector } from 'react-redux'
export default function EditUser() {
    const { id, name } = useParams()
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const history = useHistory()
    const userToken = useSelector(state => state.loginAccount.token)
    useEffect(() => {
        const getUser = async () => {
            const result = await axios({
                method: 'get',
                url: `${api_url}/users/pagination-search?name=${name}`,
                headers: {
                    'tokenByClass': tokenByClass
                }
            })
            let arr = []
            result.data.forEach(item => {
                if (item._id === id)
                    arr.push(item)
            });
            arr.map(item => {
                setEmail(item.email)
                setPhone(item.phone)

            })
            setUser(arr)
        }
        getUser()
    }, []);
    const handleEdit = () => {

        var name, birthday, role, skill, certification
        user.map(item => {
            name = item.name
            birthday = item.birthday
            role = item.role
            skill = item.skill
            certification = item.certification
        })
        const info = {
            "name": name,
            "email": email,
            "phone": phone,
            "birthday": birthday,
            "gender": true,
            "role": role,
            "skill": skill,
            "certification": certification
        }
        axios({
            method: 'PUT',
            url: `${api_url}/users/${id}`,
            headers: {
                'tokenByClass': tokenByClass,
                'token': userToken
            },
            data: info
        }).then((response) => {
            if (response.status == 200) {
                alert('Chỉnh sửa thành công !')
                history.push('/UserList')
            }
        }, (error) => {
            alert('Chỉnh sửa thất bại !')
        });
    }
    if (Object.keys(user).length !== 0) {
        return (

            <div className={style.edit_user}>
                <h3>CHỈNH SỬA NGƯỜI DÙNG</h3>
                {
                    user.map(item => (
                        <div key={item._id} className={style.card}>

                            <h4 className={style.infoLabel}> {item.role}</h4>

                            <label htmlFor='name'>Tên người dùng</label>
                            <input className={`${style.input} form-control  border-1 shadow-sm px-4`} disabled type='text' id="name" defaultValue={item.name} />
                            <label htmlFor='phone'>Số điện thoại</label>
                            <input className={`${style.input} form-control  border-1 shadow-sm px-4`} type='text' id="phone" onChange={(e) => setPhone(e.target.value)} defaultValue={item.phone} />
                            <label htmlFor='email'>Email</label>
                            <input className={`${style.input} form-control  border-1 shadow-sm px-4`} type='text' id="email" onChange={(e) => setEmail(e.target.value)} defaultValue={item.email} />
                            <label >Kĩ năng: </label>
                            <input className={`${style.input} form-control  border-1 shadow-sm px-4`} type='text'
                                defaultValue={
                                    item.skill.map(skillItem => skillItem)
                                }

                                disabled
                            />
                            <label >Chứng chỉ: </label>
                            <input className={`${style.input} form-control  border-1 shadow-sm px-4`} type='text'
                                defaultValue={
                                    item.certification.map(certificationItem => certificationItem)
                                }
                                disabled
                            />


                            <label >Ngày sinh:<span style={{ paddingLeft: '10px' }}>{item.birthday.substring(0, 10)}</span>  </label>
                            <button onClick={() => handleEdit()} to={`/EditUser/${item.name}/${item._id}`} className='btn btn-info' style={{ width: '100%', fontWeight: '600', marginTop: '20px' }}>CHỈNH SỬA</button>
                        </div>

                    ))

                }

            </div>
        )
    }
}
