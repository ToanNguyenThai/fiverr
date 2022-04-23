import { Route } from "react-router-dom";

import Footer from "../../components/User/Footer";
export const WithoutNavbar = (props) => {
    const { Component, ...restRoute } = props;
    return <Route {...restRoute} render={(propsRoute) => {
        return <>
            <Component {...propsRoute}></Component>
            <Footer></Footer>
        </>
    }} />
}