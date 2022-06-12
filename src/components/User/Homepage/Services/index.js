import React from 'react'
import style from './services.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { service } from './data';
import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <div className={style.services}>
            <div className='container'>
                <h1 className={style.title}>Popular professional services</h1>
                <div className={`${style.mySlide} row justify-content-center`}>
                    <Swiper
                        loop={true}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={40}
                        slidesPerView={4}
                        navigation

                    >
                        {
                            service.map(item => (
                                <SwiperSlide key={item.id}>
                                    <div className='col'>
                                        <Link to={`/JobList/${item.name}`}>
                                            <div className={style.slide_item} >
                                                <img className={style.slide_item_img} src={item.img}></img>
                                                <h3 className={style.slide_item_desc}>{item.desc}</h3>
                                                <h3 className={style.slide_item_name}>{item.name}</h3>
                                            </div>
                                        </Link>

                                    </div>


                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>

    )
}
