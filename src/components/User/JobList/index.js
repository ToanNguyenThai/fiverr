import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import style from './joblist.module.css'
import axios from 'axios'
import { api_url, tokenByClass } from '../../../config'
import bookcover from '../../../img/homepage/bookcover.webp'

export default function JobList() {
    let { name } = useParams()
    const [job, setJob] = useState([])

    useEffect(() => {
        setJob([]) /* Clear dữ liệu cũ trc khi render lại */
        const getJob = async () => {

            const result = await axios({
                method: 'get',
                url: `${api_url}/jobs/by-name?name=${name}`,
                headers: {
                    'tokenByClass': tokenByClass
                }
            })
            console.log(result.data);
            result.data.forEach(item => {
                setJob(prevArray => [...prevArray, item])
            })


        }
        getJob()
    }, [name]); // khi biến name thay đổi thì update lại giao diện
    const renderStar = (rating) => {
        let str = ''
        for (let i = 1; i <= rating; i++) {
            str = str + `<div class='star'></div> `
        }

        return `Rating: ${str}`
    }
    if (job !== undefined) {
        if (job.length > 0) {
            return (
                <>

                    <div className={`${style.cardContainer} container`}>
                        <div className={style.navLink}>
                            <Link to='/'>FIVERR </Link>
                            <span className={style.arrow}>{`>`}</span>
                            <Link className={style.linkName} >{name}</Link>
                        </div>
                        <h1 className={style.jobTitle}>{name}</h1>
                        <div className={style.jobCount}>{job.length} services available</div>
                        <div className='row'>
                            {
                                job.map((item) => (

                                    <div className='col-4'>
                                        <div className={`${style.card} card`} >
                                            <>
                                                {
                                                    item.image !== undefined
                                                        ? <img className={`${style.card_img} card-img-top`} src={item.image} alt="Card image cap" />
                                                        : <img className={`${style.card_img} card-img-top`} src={bookcover} alt="Card image cap" />
                                                }
                                            </>
                                            <div className={`${style.card_body} card-body`}>
                                                <Link to={`/JobDetails/${name}/${item._id}`}>
                                                    <h5 className={`${style.card_title} card-title`} >{item.name}</h5>
                                                </Link>
                                                <div className={style.star} dangerouslySetInnerHTML={{ __html: renderStar(item.rating) }}>
                                                </div>
                                                <p className={`${style.card_text} card-text`} ></p>
                                                <div className={style.separate}></div>
                                                <p className={`${style.card_price} card-text`}>STARTING AT <span className={style.price}>${item.price}</span></p>
                                                {/*      <button className={style.book_btn}></button> */}
                                            </div>

                                        </div>
                                    </div>

                                ))
                            }
                        </div>

                    </div>

                </>
            )
        }
        else return (
            <h1 className={style.testBlock}>CAN NOT FIND YOUR SERVICE ...</h1>
        )
    }


}
