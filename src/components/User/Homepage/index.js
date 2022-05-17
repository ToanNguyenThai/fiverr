import React from 'react'
import Header from './Header'
import Services from './Services'
import CheckList from './CheckList'
import Marketplace from './Marketplace'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function Homepage() {

    return (
        <>
            <AnimationOnScroll animateIn="animate__fadeInUp">
                <Header></Header>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__zoomIn">
                <Services></Services>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight">
                <CheckList></CheckList>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
                <Marketplace></Marketplace>
            </AnimationOnScroll>


        </>
    )
}
