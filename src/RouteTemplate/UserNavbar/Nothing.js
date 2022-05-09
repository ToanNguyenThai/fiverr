import { Route } from "react-router-dom";

export const Nothing = (props) => {
    const { Component, ...restRoute } = props;
    return <Route {...restRoute} render={(propsRoute) => {
        return <>
            <Component {...propsRoute}></Component>

        </>
    }} />
}