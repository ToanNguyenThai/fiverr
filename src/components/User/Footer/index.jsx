import React from 'react'
import { Link } from 'react-router-dom'
import style from './footer.module.css'
export default function Footer() {
    return (
        <div className={style.Footer}>
            <div className='container'>
                <div className={`${style.footer_links} d-flex justify-content-between`}>
                    <div className={`${style.Categories} `}>
                        <h5 className={style.title}>Categories</h5>
                        <ul className={style.list}>
                            <Link to={`/Job/${`Graphics Design`}`} className={style.list_item}>Graphics &amp; Design
                            </Link>
                            <Link to={`/Job/${`Digital Marketing`}`} className={style.list_item}>Digital Marketing
                            </Link>
                            <Link to={`/Job/${`Writing Translation`}`} className={style.list_item}>Writing &amp; Translation</Link>
                            <Link to={`/Job/${`Video Animation`}`} className={style.list_item}>Video &amp; Animation</Link>
                            <Link to={`/Job/${`Music Audio`}`} className={style.list_item}>Music &amp; Audio</Link>
                            <Link to={`/Job/${`Programming Tech`}`} className={style.list_item}>Programming &amp; Tech</Link>
                            <Link to={`/Job/${`Data`}`} className={style.list_item}>Data</Link>
                            <Link to={`/Job/${`Business`}`} className={style.list_item}>Business</Link>
                            <Link to={`/Job/${`Lifestyle`}`} className={style.list_item}>Lifestyle</Link>
                            <Link to={`/Job/${`Sitemap`}`} className={style.list_item}>Sitemap</Link>
                        </ul>
                    </div>
                    <div className={`${style.About} `}>
                        <h5 className={style.title}>About</h5>
                        <ul className={style.list}>
                            <li className={style.list_item}>Careers</li>
                            <li className={style.list_item}>Press &amp; New</li>
                            <li className={style.list_item}>Partnership</li>
                            <li className={style.list_item}>Privacy Policy</li>
                            <li className={style.list_item}>Terms of Service</li>
                            <li className={style.list_item}>Intellectual Property Claims</li>
                            <li className={style.list_item}>Investor Relations</li>

                        </ul>
                    </div>
                    <div className={`${style.Support} `}>
                        <h5 className={style.title}>Support</h5>
                        <ul className={style.list}>
                            <li className={style.list_item}>Help &amp; Support</li>
                            <li className={style.list_item}>Trust &amp; Safety</li>
                            <li className={style.list_item}>Selling on Fiverr</li>
                            <li className={style.list_item}>Buying on Fiverr</li>
                        </ul>
                    </div>
                    <div className={`${style.Community} `}>
                        <h5 className={style.title}>Community</h5>
                        <ul className={style.list}>
                            <li className={style.list_item}>Events</li>
                            <li className={style.list_item}>Blog</li>
                            <li className={style.list_item}>Forum</li>
                            <li className={style.list_item}>Podcast</li>
                            <li className={style.list_item}>Affiliates</li>
                            <li className={style.list_item}>Invite a Friend</li>
                            <li className={style.list_item}>Become a Seller</li>
                        </ul>
                    </div>
                </div>
                <div className={`${style.footer_bottom} d-flex justify-content-between`}>
                    <h1 className={style.logo}>fiverr
                        <span className={style.dot}>.</span>
                        <span className={style.license}>© Fiverr International Ltd. 2022</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}
