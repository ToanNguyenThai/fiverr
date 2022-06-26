import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { api_url, tokenByClass } from '../../../config'
import { useSelector } from 'react-redux'
import style from './jobdetails.module.css'
export default function JobDetails() {
    let { id, name } = useParams()
    const userToken = useSelector(state => state.loginAccount.token)
    const history = useHistory()
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

            setJobDetails(result.data)
            setJobName(result.data.subType.name)
        }
        getJobDetails()
    }, [id]); // khi biến name thay đổi thì update lại giao diện

    const handleBookJob = () => {

        if (userToken !== undefined) {
            axios({
                method: 'PATCH',
                url: `${api_url}/jobs/booking/${id}`,
                headers: {
                    'tokenByClass': tokenByClass,
                    'token': userToken
                }
            }).then((response) => {

                if (response.status == 200) {
                    alert('Đặc thuê công việc thành công !')
                    history.push({ pathname: '/Profile' })
                }

            }, (error) => {
                alert('Đặc thuê công việc thất bại !')
            });
        }
        else alert("Vui lòng đăng nhập")

    }
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
                            <div className={style.price_section}>
                                <h4>Today price: </h4>
                                <span className={style.price}>{jobDetails.price}$</span>
                            </div>

                            <button onClick={() => handleBookJob()} className={style.purchase_btn}>Purchase ({jobDetails.price}$)</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
