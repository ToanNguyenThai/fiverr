import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { api_url, tokenByClass } from '../../../config'
import profile from '../../../img/profile.webp'
import style from './profile.module.css'

export default function Profile() {
    const user = useSelector(state => state.loginAccount)
    console.log(user);
    const [job, setJob] = useState([])

    useEffect(() => {
        const getJob = async () => {
            const result = await axios({
                method: 'get',
                url: `${api_url}/jobs/by-user`,
                headers: {
                    'tokenByClass': tokenByClass,
                    'token': user.token
                }
            })

            console.log(result.data.bookingJob);

            setJob(result.data.bookingJob)
        }

        getJob()
    }, []);
    const renderStar = (rating) => {
        let str = ''
        for (let i = 1; i <= rating; i++) {
            str = str + `<div class='star'></div> `
        }

        return `Rating: ${str}`
    }

    return (
        <div className={style.profile}>
            <div className='container'>

                <div className='row justify-content-between'>

                    <div className='col-4'>

                        <div key={user._id} className={style.card}>
                            {
                                user.avatar !== undefined
                                    ? <img className={style.roundedAvatar} src={user.avatar} alt="avatar" style={{ width: '30%' }} />
                                    : <img className={style.roundedAvatar} src={profile} alt="avatar" style={{ width: '30%' }} />
                            }

                            <h5 className={style.name}>{user.name}</h5>
                            <div className={style.separate}></div>

                            {
                                user.skill.map(skillItem => (
                                    <p className={style.title}>{skillItem}</p>
                                ))
                            }
                            <div className={style.detailsArea}>
                                <p className={style.info}> <span className={style.infoLabel}>Ngày sinh: </span> {user.birthday.substring(0, 10)}</p>
                                <p className={style.info}> <span className={style.infoLabel}>Số điện thoại: </span> {user.phone}</p>
                                <p className={style.info}> <span className={style.infoLabel}>Email: </span> {user.email}</p>
                                <p className={style.info}> <span className={style.infoLabel}>Chức vụ: </span> {user.role}</p>
                            </div>
                        </div>


                    </div>
                    <div className={`${style.rightContainer} col-8`}>
                        {
                            job.length > 0
                                ? <div>
                                    {
                                        job.map(jobItem => (
                                            <div key={jobItem._id} className={style.jobItem_container}>
                                                <div className={style.jobItem_img}>
                                                    <img src={jobItem.image}></img>
                                                </div>
                                                <div className={style.jobItem_desc}>
                                                    <h5 className={style.jobItem_name}>{jobItem.name}</h5>
                                                    <h5 className={style.jobItem_price}>Price: {jobItem.price}$</h5>
                                                    <div className={style.star} dangerouslySetInnerHTML={{ __html: renderStar(jobItem.rating) }}>
                                                    </div>
                                                    <Link to={`/JobDetails/${jobItem.name}/${jobItem._id}`}>
                                                        <button className={`${style.btn}`}>

                                                            View Details

                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                : <div className={style.jobItem_container}>Empty</div>
                        }

                    </div>
                </div>

            </div>
        </div>
    )


}
