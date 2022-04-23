import React from 'react'

import { marketplace } from './data'
import { Link } from 'react-router-dom'
import style from './marketplace.module.css'
export default function Marketplace() {

    return (
        <div className={style.marketplace}>
            <div className='container'>
                <h1 className={style.title}>Explore the marketplace</h1>
                <div className='row d-flex justify-content-center'>
                    {
                        marketplace.map(item => (

                            <div className={`${style.item} col-3 d-flex flex-column align-items-center`}>
                                <Link to={`/Job/${item.name}`}>
                                    <img className={style.image} src={item.img}></img>
                                    <div className={style.separate}></div>
                                    <h3 className={style.name} >{item.name}</h3>
                                </Link>
                            </div>


                        ))
                    }
                </div>
            </div>
        </div>
    )
}
