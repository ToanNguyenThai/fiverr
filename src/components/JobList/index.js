import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'

import style from './joblist.module.css'
import axios from 'axios'
import { api_url, tokenByClass } from '../../config'


export default function JobList() {
    let { name } = useParams()
    const [job, setJob] = useState()
    const mounted = useRef();
    console.log(name);
    useEffect(() => {
        /* if (!mounted.current) {
            
            mounted.current = true;
        } else {
            
        } */

        const getJob = async () => {
            const result = await axios({
                method: 'get',
                url: `${api_url}/jobs/by-name?name=${name}`,
                headers: {
                    'tokenByClass': tokenByClass
                }
            })
            console.log(result);
            var arr = []
            result.data.forEach(item => {
                arr.push(item)
            })
            setJob(arr)

        }
        getJob()
    }, []);

    if (job !== undefined) {
        return (
            <>

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

            </>
        )
    }
    else return (
        <h3>CAN NOT FIND YOUR SERVICE</h3>
    )

}
