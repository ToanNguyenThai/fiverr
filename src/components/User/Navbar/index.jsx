import React, { useEffect, useState, useContext } from 'react'
import style from './navbar.module.css'
import axios from 'axios'
import { api_url, tokenByClass } from '../../../config'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [navItem, setNavItem] = useState([])

    const [checkName, setCheckName] = useState(false)
    const [value, setValue] = useState('')

    useEffect(() => {
        const getJobType = async () => {
            const result = await axios({
                method: 'get',
                url: `${api_url}/type-jobs`,
                headers: {
                    'tokenByClass': tokenByClass
                }
            })

            let arr = []
            result.data.forEach(item => {
                if (item.name !== NaN && item.subTypeJobs.length > 2)
                    /* chọn những job có tên và có nhiều sub job để */
                    arr.push(item)
            });

            setNavItem(arr)

        }


        getJobType()
    }, []);

    return (
        <>

            <div className={style.Header}>
                <div className='container'>
                    <div className={`${style.nav} d-flex justify-content-between align-items-center`}>
                        <Link className={style.logo} to='/'>
                            <h1>fiverr<span className={style.dot}>.</span></h1>
                        </Link>

                        <form className={`${style.myForm} d-flex`}>
                            <div className={style.searchArea} >
                                <i className="fas fa-search"></i>
                                <input onChange={(e) => setValue(e.target.value)} className={style.searchBar} type="text" placeholder='Try "building mobile app' />
                            </div>
                            <Link to={`/JobList/${value}`}>
                                <button className={style.btn}>Search</button>
                            </Link>
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
                            navItem.map((item) => (
                                <>

                                    <div onMouseEnter={() => setCheckName(item.name)} onMouseLeave={() => setCheckName('')} className={`${style.nav_item}`} key={item.name}>{item.name}
                                        {
                                            item.name === checkName
                                                ? <div onMouseEnter={() => setCheckName(item.name)} onMouseLeave={() => setCheckName('')} className={`${style.nav_item_popup}`}>
                                                    <div className={`${style.popup_list} row`}>
                                                        {
                                                            item.subTypeJobs.map((subItem) => (
                                                                <Link to={`/JobList/${subItem.name}`} key={subItem.name} className={`${style.subItem} col-6`}>
                                                                    {subItem.name}
                                                                </Link>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
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
