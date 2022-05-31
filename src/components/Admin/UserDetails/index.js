import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { api_url, tokenByClass } from '../../../config'
import profile from '../../../img/profile.webp'

import style from './userdetails.module.css'

export default function UserDetails() {
    let { name, id } = useParams()
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
    console.log(user);
    if (Object.keys(user).length !== 0) {
        return (

            <div className={style.user_details}>
                <h3>CHI TIẾT NGƯỜI DÙNG</h3>
                {
                    user.map(item => (
                        <div key={item._id} className={style.card}>
                            {
                                item.avatar !== undefined
                                    ? <img src={item.avatar} alt="avatar" style={{ width: '100%' }} />
                                    : <img src={profile} alt="avatar" style={{ width: '100%' }} />
                            }

                            <h2 className={style.name}>{item.name}</h2>
                            {
                                item.skill.map(skillItem => (
                                    <p className={style.title}>{skillItem}</p>
                                ))
                            }
                            <p className={style.info}> <span className={style.infoLabel}>Ngày sinh: </span> {item.birthday.substring(0, 10)}</p>
                            <p className={style.info}> <span className={style.infoLabel}>Số điện thoại: </span> {item.phone}</p>
                            <p className={style.info}> <span className={style.infoLabel}>Email: </span> {item.email}</p>
                            <p className={style.info}> <span className={style.infoLabel}>Chức vụ: </span> {item.role}</p>
                        </div>

                    ))
                }

            </div>
        )
    }

}
