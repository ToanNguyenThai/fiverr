import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { api_url, tokenByClass } from '../../../config'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { actionLogout } from '../../../redux/actions'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
export default function Navbar() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [navItem, setNavItem] = useState([])

    const [checkName, setCheckName] = useState(false)
    const [value, setValue] = useState('')

    const [showDropList, setShowDropList] = useState(false)
    const loginAccount = useSelector((state) => state.loginAccount)
    const handleLogout = () => {
        dispatch(actionLogout({}))
        history.push({ pathname: '/Login' })
    }
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

                        {
                            Object.keys(loginAccount).length === 0
                                ?
                                <ul className={`${style.nav_list} d-flex align-items-center`}>
                                    <li className={style.nav_list_item}>Become a Seller</li>
                                    <li className={style.nav_list_item}>
                                        <Link to='/Login'>
                                            Sign In
                                        </Link></li>
                                    <li className={`${style.nav_list_item} ${style.join}`}>
                                        <Link to='/SignUp'>
                                            Join
                                        </Link>
                                    </li>
                                </ul>
                                :
                                <ul className={`${style.nav_list} d-flex align-items-center`}>
                                    <li className={style.nav_list_item}>Welcome back, {loginAccount.phone}</li>
                                    <li onClick={() => setShowDropList(!showDropList)} className={`${style.nav_list_item} ${style.avatar_area}`}>
                                        {
                                            loginAccount.avatar !== undefined
                                                ? <img src={loginAccount.avatar} ></img>
                                                : <img src='https://i.picsum.photos/id/106/2592/1728.jpg?hmac=E1-3Hac5ffuCVwYwexdHImxbMFRsv83exZ2EhlYxkgY'></img>

                                        }
                                        {
                                            showDropList ?
                                                <div className={style.dropList}>
                                                    <div className={style.dropList_item}>View Profile</div>
                                                    <div onClick={() => handleLogout()} className={style.dropList_item}>Sign Out</div>
                                                </div>
                                                : ''
                                        }

                                    </li>


                                </ul>
                        }

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
