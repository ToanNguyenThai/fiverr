import React from 'react'
import { useState } from 'react'

export default function Sidebar() {
    const [showUser, setShowUser] = useState(false)
    const [showDanhMuc, setShowDanhMuc] = useState(false)
    const [showService, setShowService] = useState(false)
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">


            <div className="brand-link font-weight-bold text-center">DASHBOARD</div>


            <div className="sidebar">


                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        <li className="nav-item pe-auto">
                            <div onClick={() => setShowUser(!showUser)} className="nav-link">
                                <i className="nav-icon fas fa-user-alt" />
                                <p className='text-white'>
                                    QUẢN LÝ NGƯỜI DÙNG
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </div>
                            {
                                showUser
                                    ? <ul className="nav">
                                        <li className="nav-item">
                                            <a href="./index.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Dashboard v1</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./index2.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Dashboard v2</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./index3.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Dashboard v3</p>
                                            </a>
                                        </li>
                                    </ul>
                                    : ""
                            }

                        </li>

                        <li className="nav-item pe-auto">
                            <div onClick={() => setShowDanhMuc(!showDanhMuc)} className="nav-link">
                                <i className="nav-icon fas fa-table" />
                                <p className='text-white'>
                                    QUẢN LÝ DANH MỤC
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </div>
                            {
                                showDanhMuc
                                    ? <ul className="nav">
                                        <li className="nav-item">
                                            <a href="pages/tables/simple.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Simple Tables</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/tables/data.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>DataTables</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/tables/jsgrid.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>jsGrid</p>
                                            </a>
                                        </li>
                                    </ul>
                                    : ""
                            }

                        </li>


                        <li className="nav-item pe-auto">
                            <div onClick={() => setShowService(!showService)} className="nav-link">
                                <i className="nav-icon fas fa-book" />
                                <p className='text-white'>
                                    QUẢN LÝ DỊCH VỤ
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </div>
                            {
                                showService
                                    ?
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <a href="pages/examples/invoice.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Invoice</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/profile.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Profile</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/e-commerce.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>E-commerce</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/projects.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Projects</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/project-add.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Project Add</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/project-edit.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Project Edit</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/project-detail.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Project Detail</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/contacts.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Contacts</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/faq.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>FAQ</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/contact-us.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Contact us</p>
                                            </a>
                                        </li>
                                    </ul>
                                    : ""

                            }

                        </li>

                    </ul>
                </nav>

            </div>

        </aside>

    )
}
