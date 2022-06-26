import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar() {
    const [showUser, setShowUser] = useState(false)
    const [showDanhMuc, setShowDanhMuc] = useState(false)
    const [showService, setShowService] = useState(false)
    const [showSidebar, setShowSidebar] = useState(true)
    return (
        <div className="main-sidebar sidebar-dark-primary elevation-4 position-fixed">

            <Link to='/Admin' className="font-weight-bold text-center brand-link">DASHBOARD</Link>
            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        <li className="nav-item ">
                            <summary onClick={() => setShowUser(!showUser)} className="nav-link">
                                <i className="nav-icon fas fa-user-alt" />
                                <p className='text-white'>
                                    QUẢN LÝ NGƯỜI DÙNG
                                    {
                                        showUser
                                            ? <i className="right fas fa-angle-up" />
                                            : <i className="right fas fa-angle-down   " />
                                    }

                                </p>
                            </summary>
                            {
                                showUser
                                    ? <ul className="nav">
                                        <li className="nav-item">
                                            <Link to='/UserList' className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Danh sách người dùng</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/AddAdmin' className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Thêm quản trị viên</p>
                                            </Link>
                                        </li>

                                    </ul>
                                    : ""
                            }

                        </li>

                        <li className="nav-item cursor-pointer">
                            <summary onClick={() => setShowDanhMuc(!showDanhMuc)} className="nav-link">
                                <i className="nav-icon fas fa-table" />
                                <p className='text-white'>
                                    QUẢN LÝ DANH MỤC
                                    {
                                        showDanhMuc
                                            ? <i className="right fas fa-angle-up" />
                                            : <i className="right fas fa-angle-down" />
                                    }
                                </p>
                            </summary>
                            {
                                showDanhMuc
                                    ? <ul className="nav">
                                        <Link to='' className="nav-item">
                                            <a className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Danh sách danh mục</p>
                                            </a>
                                        </Link>
                                        <Link to='' className="nav-item">
                                            <a className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Thêm danh mục</p>
                                            </a>
                                        </Link>

                                    </ul>
                                    : ""
                            }

                        </li>


                        <li className="nav-item cursor-pointer">
                            <summary onClick={() => setShowService(!showService)} className="nav-link">
                                <i className="nav-icon fas fa-book" />
                                <p className='text-white'>
                                    QUẢN LÝ DỊCH VỤ
                                    {
                                        showService
                                            ? <i className="right fas fa-angle-up" />
                                            : <i className="right fas fa-angle-down" />
                                    }
                                </p>
                            </summary>
                            {
                                showService
                                    ?
                                    <ul className="nav">
                                        <Link to='' className="nav-item">
                                            <a href="pages/examples/invoice.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Danh sách dịch vụ</p>
                                            </a>
                                        </Link>
                                        <Link to='' className="nav-item">
                                            <a href="pages/examples/profile.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Thêm dịch vụ</p>
                                            </a>
                                        </Link>

                                    </ul>
                                    : ""

                            }

                        </li>

                    </ul>
                </nav>

            </div>

        </div>



    )
}
