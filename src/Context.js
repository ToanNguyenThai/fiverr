import React from 'react'

export const DataContext = React.createContext()

function DataProvider(props) {

    const value = 'testing'
    // bạn cũng có thể viết như sau:
    // const value = React.useState(0)
    return <DataContext.Provider value={value} {...props} />
}