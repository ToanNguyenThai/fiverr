import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { api_url, tokenByClass } from '../../../config'
import profile from '../../../img/profile.webp'
import style from './profile.module.css'

export default function Profile() {
    let { name, id } = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        console.log(name);
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
            <div className={style.profile}>
                <div className='container'>
                    {
                        user.map(item => (
                            <div className='row justify-content-between'>

                                <div className='col-4'>

                                    <div key={item._id} className={style.card}>
                                        {
                                            item.avatar !== undefined
                                                ? <img className={style.roundedAvatar} src={item.avatar} alt="avatar" style={{ width: '30%' }} />
                                                : <img className={style.roundedAvatar} src={profile} alt="avatar" style={{ width: '30%' }} />
                                        }

                                        <h5 className={style.name}>{item.name}</h5>
                                        <div className={style.separate}></div>

                                        {
                                            item.skill.map(skillItem => (
                                                <p className={style.title}>{skillItem}</p>
                                            ))
                                        }
                                        <div className={style.detailsArea}>
                                            <p className={style.info}> <span className={style.infoLabel}>Ngày sinh: </span> {item.birthday.substring(0, 10)}</p>
                                            <p className={style.info}> <span className={style.infoLabel}>Số điện thoại: </span> {item.phone}</p>
                                            <p className={style.info}> <span className={style.infoLabel}>Email: </span> {item.email}</p>
                                            <p className={style.info}> <span className={style.infoLabel}>Chức vụ: </span> {item.role}</p>
                                        </div>
                                    </div>


                                </div>
                                <div className={`${style.rightContainer} col-8`}>
                                    {
                                        item.bookingJob.length > 0
                                            ? <div>
                                                {
                                                    user.bookingJob.forEach(jobItem => (
                                                        <div>{jobItem}</div>
                                                    ))
                                                }
                                            </div>
                                            : <div>Chưa có công việc</div>
                                    }

                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        )
    }

}
