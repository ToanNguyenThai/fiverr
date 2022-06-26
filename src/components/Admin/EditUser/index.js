import React, { useState, useEffect } from 'react'
import style from './editUser.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { api_url, tokenByClass } from '../../../config'

export default function EditUser() {
    const { id, name } = useParams()

    const [user, setUser] = useState({})
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

            setUser(arr)
        }
        getUser()
    }, []);
    if (Object.keys(user).length !== 0) {
        return (

            <div className={style.edit_user}>
                <h3>CHỈNH SỬA NGƯỜI DÙNG</h3>
                {
                    user.map(item => (
                        <div key={item._id} className={style.card}>

                            <h4 className={style.infoLabel}> {item.role}</h4>

                            <label htmlFor='name'>Tên người dùng</label>
                            <input disabled className="form-control  border-1 shadow-sm px-4" type='text' id="name" value={item.name} />
                            <label htmlFor='phone'>Số điện thoại</label>
                            <input className="form-control  border-1 shadow-sm px-4" type='text' id="phone" value={item.phone} />
                            <label htmlFor='email'>Email</label>
                            <input className="form-control  border-1 shadow-sm px-4" type='text' id="email" value={item.email} />
                            <label >Kĩ năng: </label>
                            <input className="form-control  border-1 shadow-sm px-4" type='text' id="email"
                                value={
                                    item.skill.map(skillItem => skillItem)
                                }
                            />


                            <label >Ngày sinh:<span style={{ paddingLeft: '10px' }}>{item.birthday.substring(0, 10)}</span>  </label>
                            <button to={`/EditUser/${item.name}/${item._id}`} className='btn btn-info' style={{ width: '100%', fontWeight: '600', marginTop: '20px' }}>CHỈNH SỬA</button>
                        </div>

                    ))

                }

            </div>
        )
    }
}
