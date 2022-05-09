import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { api_url, tokenByClass } from '../../../config'
import { Link } from 'react-router-dom'
import img_forError from '../../../img/homepage/bookcover.webp'
import style from './job.module.css'
export default function Job() {
    let { name } = useParams()
    const [job, setJob] = useState([])
    const [jobId, setJobId] = useState([])

    useEffect(() => {
        const getJobId = async () => {
            const result = await axios({
                method: 'get',
                url: `${api_url}/type-jobs`,
                headers: {
                    'tokenByClass': tokenByClass
                }
            })
            result.data.forEach(item => {

                if (item.name === name)
                    setJobId(prevArray => [...prevArray, item._id])
            });
        }
        getJobId()
    }, [name])
    useEffect(() => {

        if (jobId !== undefined) {
            jobId.forEach(item => {
                const getJob = async () => {
                    const result = await axios({
                        method: 'get',
                        url: `${api_url}/type-jobs/${item}`,
                        headers: {
                            'tokenByClass': tokenByClass
                        }
                    })
                    setJob(prevArray => [...prevArray, result.data])
                }
                getJob()
            })
        }

        else return
    }, [jobId])

    return (
        <div className={`container`}>
            <h1 className={style.title}>{name}</h1>
            <div className='row'>
                <div className='col-3'>
                    <h5>{name}</h5>
                    {
                        job.map((item) => (
                            <>
                                {
                                    item.subTypeJobs.map(subItem => (
                                        <Link to={`/JobList/${subItem.name}`} key={subItem.name} className={`${style.jobType}`}>
                                            {subItem.name}
                                        </Link>
                                    ))
                                }
                            </>

                        ))
                    }
                </div>
                <div className='col-9'>
                    <div className='row'>
                        {
                            job.map((item) => (
                                <>
                                    {
                                        item.subTypeJobs.map(subItem => (

                                            <Link to={`/JobList/${subItem.name}`} className='col-4'>

                                                <div className={`${style.card} card`}>
                                                    {
                                                        subItem.image !== undefined
                                                            ?
                                                            <img className={`${style.card_img} card-img-top`} src={subItem.image} alt="Image not found"
                                                            />
                                                            :
                                                            <img className={`${style.card_img} card-img-top`} src={img_forError} alt="Image not found"
                                                            />
                                                    }

                                                    <div className={style.overlay}></div>
                                                    <h5 className={`${style.card_title} card-title`}>{subItem.name}</h5>

                                                </div>
                                            </Link>
                                        ))
                                    }
                                </>

                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )


}
