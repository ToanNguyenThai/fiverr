import { Route } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export const WithNavbar = (props) => {
    const { Component, ...restRoute } = props;
    return <Route {...restRoute} render={(propsRoute) => {
        return <>
            <Navbar></Navbar>
            <Component {...propsRoute}></Component>
            <Footer></Footer>
        </>
    }} />
}