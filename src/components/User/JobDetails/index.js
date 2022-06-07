import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { api_url, tokenByClass } from '../../../config'
import style from './jobdetails.module.css'
export default function JobDetails() {
    let { id, name } = useParams()
    const [jobName, setJobName] = useState('')
    const [jobDetails, setJobDetails] = useState([])
    useEffect(() => {

        const getJobDetails = async () => {

            const result = await axios({
                method: 'get',
                url: `${api_url}/jobs/${id}`,
                headers: {
                    'tokenByClass': tokenByClass
                }
            })
            console.log(result.data);
            /* result.data.forEach(item => {
                setJobDetails(prevArray => [...prevArray, item])
            }) */
            setJobDetails(result.data)
            setJobName(result.data.subType.name)
        }
        getJobDetails()
    }, [id]); // khi biến name thay đổi thì update lại giao diện
    return (
        <div className={style.jobdetails}>

            <div className={`${style.cardContainer} container`}>
                <div className='row'>
                    <div className='col-7'>
                        <div className={style.navLink}>
                            <Link to='/'>FIVERR </Link>
                            <span className={style.arrow}>{`>`}</span>
                            <Link to={`/JobList/${name}`} className={style.linkName} >{name}</Link>
                            <span className={style.arrow}>{`>`}</span>
                            <Link className={style.linkName} >{jobName}</Link>
                        </div>
                        <h3 className={style.jobTitle}>{jobDetails.name}</h3>
                        <div className={style.separate}></div>
                        <img className={style.image} src={jobDetails.image}></img>
                    </div>
                    <div className={`${style.right_container} col-5`} >
                        <div className={style.purchase}>
                            <h3 className={style.price}>{jobDetails.price}$</h3>
                            <button className={style.purchase_btn}>Continue ({jobDetails.price}$)</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
