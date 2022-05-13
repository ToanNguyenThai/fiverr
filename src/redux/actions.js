export const actionLogin = (data) => {
    return {
        type: 'login',
        payload: data
    }
}
export const actionLogout = (data) => {
    return {
        type: 'logout',
        payload: data
    }
}  