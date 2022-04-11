import React from 'react'
import style from './checklist.module.css'
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import videoBG from '../../../img/homepage/videoBG.webp'
import playBtn from '../../../img/homepage/playBtn.png'
library.add(faCheckCircle);

export default function CheckList() {
    return (
        <div className={style.checkList}>
            <div className='container'>
                <div className={`${style.content}`}>
                    <div className='row'>
                        <div className='col-5'>
                            <h1 className={style.title}>A whole world of freelance <br></br>
                                talent at your fingertips
                            </h1>
                            <div className={style.checkItem}>
                                <div className={`${style.checkItem_title} d-flex align-items-center`}>
                                    <FontAwesomeIcon className={style.icon} icon="fa-regular fa-circle-check" />

                                    <h3> The best for every budget </h3>
                                </div>
                                <p>
                                    Find high-quality services at every price point. No hourly rates, just project-based pricing.
                                </p>
                            </div>

                            <div className={style.checkItem}>
                                <div className={`${style.checkItem_title} d-flex align-items-center`}>
                                    <FontAwesomeIcon className={style.icon} icon="fa-regular fa-circle-check" />

                                    <h3> Quality work done quickly</h3>
                                </div>
                                <p>
                                    Find the right freelancer to begin working on your project within minutes.                            </p>
                            </div>

                            <div className={style.checkItem}>
                                <div className={`${style.checkItem_title} d-flex align-items-center`}>
                                    <FontAwesomeIcon className={style.icon} icon="fa-regular fa-circle-check" />

                                    <h3>Protected payments, every time
                                    </h3>
                                </div>
                                <p>
                                    Always know what you'll pay upfront. Your payment isn't released until you approve the work.
                                </p>
                            </div>

                            <div className={style.checkItem}>
                                <div className={`${style.checkItem_title} d-flex align-items-center`}>
                                    <FontAwesomeIcon className={style.icon} icon="fa-regular fa-circle-check" />

                                    <h3>24/7 support
                                    </h3>
                                </div>
                                <p>
                                    Questions? Our round-the-clock support team is available to help anytime, anywhere.
                                </p>
                            </div>
                        </div>
                        <div className='col-7'>
                            <img src={videoBG} className={style.videoBG}></img>
                            <img src={playBtn} className={style.playBtn}></img>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
