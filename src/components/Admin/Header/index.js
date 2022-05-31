import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionLogout } from '../../../redux/actions'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import style from './header.module.css'
export default function Header() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [showDropList, setShowDropList] = useState(false)
    const loginAccount = useSelector((state) => state.loginAccount)
    const handleLogout = () => {
        dispatch(actionLogout({}))
        history.push({ pathname: '/' })
    }
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">

            <ul className={`${style.list} navbar-nav ml-auto d-flex align-items-center justify-content-between`}>
                {/* Navbar Search */}
                <li className={style.nav_list_item}>Welcome back, {loginAccount.name}</li>

                <li className={`${style.nav_list_item} ${style.arrow} nav-item`}>
                    <i onClick={() => setShowDropList(!showDropList)} className="right fas fa-angle-down" />
                    {
                        showDropList ?
                            <div className={style.dropList}>
                                <div className={style.dropList_item}>

                                    <Link to={`/UserDetails/${loginAccount.name}/${loginAccount._id}`}>
                                        View Profile
                                    </Link>

                                </div>

                                <div onClick={() => handleLogout()} className={style.dropList_item}>
                                    <Link>
                                        Sign Out
                                    </Link>

                                </div>
                            </div>
                            : ''
                    }
                </li>

            </ul>
        </nav>

    )
}
