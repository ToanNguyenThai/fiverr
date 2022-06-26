import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { api_url, tokenByClass } from '../../../config'
import style from './userlist.module.css'
import { useSelector } from 'react-redux'
export default function UserList() {
    const [userListLength, setUserListLength] = useState()
    const [userList, setUserList] = useState([])
    const [userListByPage, setUserListByPage] = useState([])
    const [userFindBySearch, setUserFindBySearch] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const userToken = useSelector(state => state.loginAccount.token)
    const history = useHistory()
    useEffect(() => {
        const getUserList = async () => {
            const result = await axios({
                method: 'get',
                url: `${api_url}/users`,
                headers: {
                    'tokenByClass': tokenByClass
                }
            })

            let arr = []
            result.data.forEach(item => {
                arr.push(item)
            });
            console.log(Math.floor(arr.length / 10));
            setUserListLength(Math.floor(arr.length / 10))
            setUserList(arr)
        }
        getUserList()
    }, []);
    useEffect(() => {
        const getUserListByPage = async () => {
            const result = await axios({
                method: 'get',
                url: `${api_url}/users/pagination-search?skip=${10 * (currentPage - 1)}&limit=10`,
                headers: {
                    'tokenByClass': tokenByClass
                }
            })

            let arr = []
            result.data.forEach(item => {
                arr.push(item)
            });
            setUserListByPage(arr)

        }
        getUserListByPage()
    }, [currentPage]);



    const prevPage = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1)
        else setCurrentPage(1)
    }
    const nextPage = () => {
        if (currentPage < userListLength)
            setCurrentPage(currentPage + 1)
        else setCurrentPage(userListLength)

    }

    const handleSearch = () => {

        var user_findBySearch = []
        userList.map(item => {
            if (item.name !== undefined) {/*  1 số name api bỏ trống */
                if (searchValue !== '') {
                    if (item.name.toLowerCase().includes(searchValue.toLowerCase()))
                        user_findBySearch.push(item)
                }
                else user_findBySearch = []
            }
            else return
        })
        setUserFindBySearch(user_findBySearch)
    }
    const handleDelete = (id) => {
        axios({
            method: 'delete',
            url: `${api_url}/users/${id}`,
            headers: {
                'tokenByClass': tokenByClass,
                'token': userToken
            }
        }).then((response) => {
            if (response.status == 200) {
                alert('Xóa người dùng thành công')
                history.push('/admin')
            }
        }, (error, response) => {

            alert('Xóa người dùng thất bại')
        });

    }
    return (
        <div className={style.userList}>
            <div className={style.header}>
                <h3 className={style.title}>QUẢN LÝ NGƯỜI DÙNG</h3>
                <div className={style.inputArea}>
                    <input onChange={(e) => setSearchValue(e.target.value)} placeholder='Nhập tên người dùng' type='text' />
                    <button onClick={() => handleSearch()} className='btn btn-primary'>TÌM KIẾM</button>
                </div>
            </div>

            <table className={style.myTable}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Vai trò</th>
                        <th>Thao tác</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        userFindBySearch.length > 0
                            ? <>
                                {
                                    userFindBySearch.map((item) => (
                                        <tr key={item._id}>
                                            <td>{item._id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.role}</td>
                                            <td >
                                                <button onClick={() => handleDelete(item._id)} style={{ fontSize: '13px' }} className='btn btn-danger'>XÓA</button>

                                                <Link style={{ fontSize: '13px' }} className={`${style.infoBtn} btn btn-info`} to={`/UserDetails/${item.name}/${item._id}`}>
                                                    CHI TIẾT
                                                </Link>

                                            </td>
                                        </tr>
                                    ))
                                }
                            </>
                            : <>
                                {userListByPage.map((item) => (
                                    <tr key={item._id}>
                                        <td>{item._id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.role}</td>
                                        <td >
                                            <button onClick={() => handleDelete(item._id)} style={{ fontSize: '13px' }} className='btn btn-danger'>XÓA</button>

                                            <Link style={{ fontSize: '13px' }} className={`${style.infoBtn} btn btn-info`} to={`/UserDetails/${item.name}/${item._id}`}>
                                                CHI TIẾT
                                            </Link>

                                        </td>
                                    </tr>
                                ))}
                            </>

                    }


                </tbody>
            </table>
            <div className={style.pageArea}>
                <div onClick={() => setCurrentPage(1)} className={style.pageDirect}>Trang đầu</div>

                <div onClick={() => prevPage()} className={style.pageDirect}>Trang trước</div>
                <div className={style.pageNumber}>{currentPage}</div>
                <div onClick={() => nextPage()} className={style.pageDirect}>Trang sau</div>
                <div onClick={() => setCurrentPage(userListLength)} className={style.pageDirect}>Trang cuối</div>

            </div>
        </div>
    )
}
