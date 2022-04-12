import React from 'react'
import style from './Header.module.css'

export default function Header() {
    return (
        <>

            <div className={style.Header}>
                <div className='container'>
                    <div className={`${style.nav} d-flex justify-content-between align-items-center`}>
                        <a className={style.logo} href='#'>
                            <h1>fiverr    <span className={style.dot}>.</span></h1>
                        </a>
                        <ul className={`${style.nav_list} d-flex align-items-center`}>
                            <li className={style.nav_list_item}>Become a Seller</li>
                            <li className={style.nav_list_item}>Sign In</li>
                            <li className={`${style.nav_list_item} ${style.join}`}>Join</li>
                        </ul>

                    </div>
                    <div className={style.action}>
                        <h1 className={style.text}>Find the perfect <span className={style.text_italic}> <i>freelance</i></span>  <br></br> services for your business</h1>
                        <form className={`${style.myForm} d-flex`}>
                            <div className={style.searchArea} >
                                <i className="fas fa-search"></i>
                                <input className={style.searchBar} type="text" placeholder='Try "building mobile app' />
                            </div>
                            <button className={style.btn}>Search</button>
                        </form>


                        <div className={`${style.options}`}>
                            Popular:
                            <ul className={`${style.options_list}`}>
                                <li className={`${style.options_item}`}>Websign Design</li>
                                <li className={`${style.options_item}`}>WordPress</li>
                                <li className={`${style.options_item}`}>Logo Design</li>
                                <li className={`${style.options_item}`}>NFT Art</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </>


    )
}
