import { Route } from "react-router-dom";
import Header from "../../components/Admin/Header";
import Sidebar from "../../components/Admin/Sidebar";
export const SideAndHeader = (props) => {
    const { Component, ...restRoute } = props;
    return <Route {...restRoute} render={(propsRoute) => {
        return <>
            <Header></Header>
            <Component {...propsRoute}></Component>
            <Sidebar></Sidebar>
        </>
    }} />
}