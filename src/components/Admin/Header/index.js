import React from 'react'
import { useState } from 'react'
import style from './header.module.css'
export default function Header() {
    const [showDropList, setShowDropList] = useState(false)
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">

            <ul className={`${style.list} navbar-nav ml-auto d-flex align-items-center justify-content-between`}>
                {/* Navbar Search */}
                <li className={style.nav_list_item}>Welcome back, {/* {loginAccount.name} */}</li>
                {/*  <li onClick={() => setShowDropList(!showDropList)} className={` ${style.nav_list_item} ${style.avatar_area} nav-item`}>
                            {
                        loginAccount.avatar !== undefined
                            ? <img src={loginAccount.avatar} ></img>
                            : <img src='https://i.picsum.photos/id/106/2592/1728.jpg?hmac=E1-3Hac5ffuCVwYwexdHImxbMFRsv83exZ2EhlYxkgY'></img>

                    }
                    {
                        showDropList ?
                            <div className={style.dropList}>
                                <div className={style.dropList_item}>View Profile</div>
                                <div className={style.dropList_item}>Sign Out</div>
                            </div>
                            : ''
                    } 
                    <img src='https://i.picsum.photos/id/106/2592/1728.jpg?hmac=E1-3Hac5ffuCVwYwexdHImxbMFRsv83exZ2EhlYxkgY'></img>

                </li> */}
                <li className={`${style.nav_list_item} ${style.arrow} nav-item`}>
                    <i onClick={() => setShowDropList(!showDropList)} className="right fas fa-angle-down" />
                    {
                        showDropList ?
                            <div className={style.dropList}>
                                <div className={style.dropList_item}>View Profile</div>
                                <div className={style.dropList_item}>Sign Out</div>
                            </div>
                            : ''
                    }
                </li>

            </ul>
        </nav>

    )
}
