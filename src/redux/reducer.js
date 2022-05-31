const initState = {
    loginAccount: {}
}
const rootReducer = (state = initState, action) => {
    console.log({ state, action });
    switch (action.type) {
        case 'login':
            return {
                ...state,
                loginAccount: action.payload
            }
        case 'logout':
            return {
                ...state,
                loginAccount: action.payload
            }
        default:
            return state
    }
}
export default rootReducer