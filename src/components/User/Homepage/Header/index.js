import React from 'react'
import { useState } from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actionLogout } from '../../../../redux/actions'
import { useHistory } from 'react-router-dom'
export default function Header() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [value, setValue] = useState('')
    const [showDropList, setShowDropList] = useState(false)
    const loginAccount = useSelector((state) => state.loginAccount)
    const handleLogout = () => {
        dispatch(actionLogout({}))
        history.push({ pathname: '/Login' })
    }
    return (
        <>

            <div className={style.Header}>
                <div className='container'>

                    <div className={`${style.nav} d-flex justify-content-between align-items-center`}>
                        <Link className={style.logo} to='/'>
                            <h1>fiverr    <span className={style.dot}>.</span></h1>
                        </Link>
                        {
                            Object.keys(loginAccount).length === 0
                                ?
                                <ul className={`${style.nav_list} d-flex align-items-center`}>
                                    <li className={style.nav_list_item}>Become a Seller</li>
                                    <li className={style.nav_list_item}>
                                        <Link to='/Login'>
                                            Sign In
                                        </Link></li>
                                    <Link to='/SignUp'>
                                        <li className={`${style.nav_list_item} ${style.join}`}>

                                            Join

                                        </li>
                                    </Link>
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
                                                    <div className={style.dropList_item}>
                                                        <Link to={`/Profile/${loginAccount.name}/${loginAccount._id}`} >View Profile</Link >

                                                    </div>
                                                    <div onClick={() => handleLogout()} className={style.dropList_item}>Sign Out</div>
                                                </div>
                                                : ''
                                        }

                                    </li>


                                </ul>
                        }


                    </div>




                    <div className={style.action}>
                        <h1 className={style.text}>Find the perfect <span className={style.text_italic}> <i>freelance</i></span>  <br></br> services for your business</h1>
                        <form className={`${style.myForm} d-flex`}>
                            <div className={style.searchArea} >
                                <i className="fas fa-search"></i>
                                <input onChange={(e) => setValue(e.target.value)} className={style.searchBar} type="text" placeholder='Try "building mobile app"' />
                            </div>
                            <Link to={`/JobList/${value}`}>
                                <button className={style.btn}>Search</button>
                            </Link>

                        </form>


                        <div className={`${style.options}`}>
                            Popular:
                            <ul className={`${style.options_list}`}>

                                <Link to={`/JobList/${'Website Design'}`}>
                                    <li className={`${style.options_item}`}>
                                        Website Design
                                    </li>
                                </Link>
                                <Link to={`/JobList/${'WordPress'}`}>
                                    <li className={`${style.options_item}`}>
                                        WordPress
                                    </li>
                                </Link>
                                <Link to={`/JobList/${'Logo Design'}`}>
                                    <li className={`${style.options_item}`}>
                                        Logo Design
                                    </li>
                                </Link>
                                <Link to={`/JobList/${'NFT Art'}`}>
                                    <li className={`${style.options_item}`}>
                                        NFT Art
                                    </li>
                                </Link>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </>


    )
}
