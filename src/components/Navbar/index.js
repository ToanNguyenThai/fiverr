import React, { useEffect, useState } from 'react'
import style from './navbar.module.css'
import axios from 'axios'
import { api_url, tokenByClass } from '../../config'
export default function Navbar() {
    const [navItem, setNavItem] = useState([])
    const [popUp, setPopUp] = useState(false)
    const [checkName, setCheckName] = useState(false)

    useEffect(() => {
        const getJob = async () => {
            const result = await axios({
                method: 'get',
                url: `${api_url}/type-jobs`,
                headers: {
                    'tokenByClass': tokenByClass
                }
            })
            console.log(result.data);
            let arr = []
            result.data.forEach(item => {
                if (item.name !== NaN && item.subTypeJobs.length > 2)
                    /* chọn những job có tên và có nhiều sub job để */
                    arr.push(item)
            });
            setNavItem(arr)

        }
        getJob()
    }, []);
    return (
        <>

            <div className={style.Header}>
                <div className='container'>
                    <div className={`${style.nav} d-flex justify-content-between align-items-center`}>
                        <a className={style.logo} href='#'>
                            <h1>fiverr<span className={style.dot}>.</span></h1>
                        </a>

                        <form className={`${style.myForm} d-flex`}>
                            <div className={style.searchArea} >
                                <i className="fas fa-search"></i>
                                <input className={style.searchBar} type="text" placeholder='Try "building mobile app' />
                            </div>
                            <button className={style.btn}>Search</button>
                        </form>

                        <ul className={`${style.nav_list} d-flex align-items-center`}>
                            <li className={style.nav_list_item}>Become a Seller</li>
                            <li className={style.nav_list_item}>Sign In</li>
                            <li className={`${style.nav_list_item} ${style.join}`}>Join</li>
                        </ul>

                    </div>
                </div>
                <div className={`${style.nav_options}`}>
                    <div className='container d-flex justify-content-between align-items-center'>
                        {
                            navItem.map((item, key) => (
                                <>
                                    <div onMouseEnter={() => setCheckName(item.name)} onMouseLeave={() => setCheckName('')} className={`${style.nav_item}`} key={key}>{item.name}
                                        {
                                            item.name === checkName
                                                ? <div className={`${style.nav_item_popup}`}></div>
                                                : ''
                                        }
                                    </div>

                                </>

                            ))
                        }
                    </div>

                </div>

            </div>

        </>


    )
}
