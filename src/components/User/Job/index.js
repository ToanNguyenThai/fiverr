import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { api_url, tokenByClass } from '../../../config'
import { Link } from 'react-router-dom'
import style from './job.module.css'
export default function Job() {
    let { name } = useParams()
    const [job, setJob] = useState()
    const [typeJob, setTypeJob] = useState()
    const [jobId, setJobId] = useState()



    useEffect(() => {
        const getJob = async () => {
            const result1 = await axios({
                method: 'get',
                url: `${api_url}/type-jobs`,
                headers: {
                    'tokenByClass': tokenByClass
                }
            })
            result1.data.forEach(item => {
                if (item.name === name) {
                    console.log(item);
                    setJobId(item._id)
                }
            });
        }
        getJob()
    }, [name])
    useEffect(() => {

        if (jobId !== undefined)
            console.log(jobId);

        else return
    }, [jobId])
    return (
        <h1 className={style.testBlock}>CAN NOT FIND YOUR SERVICE ...</h1>
    )

}
