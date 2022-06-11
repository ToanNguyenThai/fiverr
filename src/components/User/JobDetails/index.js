import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { api_url, tokenByClass } from '../../../config'
import { useSelector } from 'react-redux'
import style from './jobdetails.module.css'
export default function JobDetails() {
    let { id, name } = useParams()
    const userToken = useSelector(state => state.loginAccount)
    console.log(userToken);
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

    const handleBookJob = () => {
        // axios({
        //     method: 'PATCH',
        //     url: `${api_url}/jobs/booking/${id}`,
        //     headers: {
        //         'tokenByClass': tokenByClass
        //     },
        //     data: account
        // }).then((response) => {
        //     console.log(response.data.user.role);
        //     if (response.status == 200) {
        //         alert('Đăng nhập thành công !')
        //         dispatch(actionLogin(response.data.user))
        //     }
        //     /* history.goBack() */
        //     if (response.data.user.role === 'CLIENT')
        //         history.push({ pathname: '/' })
        //     else history.push({ pathname: '/Admin' })

        // }, (error) => {
        //     alert('Đăng nhập thất bại !')
        // });
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
                            <h3 className={style.price}>{jobDetails.price}$</h3>
                            <button onClick={() => handleBookJob} className={style.purchase_btn}>Continue ({jobDetails.price}$)</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
