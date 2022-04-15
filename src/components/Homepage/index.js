import React from 'react'
import Header from './Header'
import Services from './Services'
import CheckList from './CheckList'
import Marketplace from './Marketplace'
import Footer from '../Footer'
export default function Homepage() {
    return (
        <>
            <Header></Header>
            <Services></Services>
            <CheckList></CheckList>
            <Marketplace></Marketplace>
        </>
    )
}
