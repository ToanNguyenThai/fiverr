import React from 'react'
import { useEffect, useState, useContext } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import style from './joblist.module.css'
import axios from 'axios'
import { api_url, tokenByClass } from '../../config'
import { faKipSign } from '@fortawesome/free-solid-svg-icons'

export default function JobList() {
    const [value] = useContext()
    const [job, setJob] = useState()
    useEffect(() => {
        const getJob = async () => {
            const result = await axios({
                method: 'get',
                url: `${api_url}/jobs`,
                headers: {
                    'tokenByClass': tokenByClass
                }
            })


            var arr = []
            result.data.forEach(item => {
                if (item.subType !== null && item.subType !== undefined && item.subType.name === 'Gaming')
                    arr.push(item)
            })
            setJob(arr)

        }
        getJob()
    }, []);
    console.log(job);
    if (job !== undefined) {
        return (
            <>
                <Navbar></Navbar>
                <div className={`${style.cardContainer} container`}>

                    <div className='row'>
                        {
                            job.map((item) => (

                                <div className='col-4'>
                                    <div className={`${style.card} card`} >
                                        <img className="card-img-top" src={item.image} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">{item.name}</p>
                                            <p className="card-text">{item.price}</p>

                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>

                </div>
                <Footer></Footer>
            </>

        )
    }

}
