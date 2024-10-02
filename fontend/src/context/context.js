

import React, { useEffect, useState, useContext } from 'react';
import BaseURL from '../config/index'
import axios from 'axios'

const GlobalStateContext = React.createContext()
const GlobalStateUpdateContext = React.createContext()
const UseGlobalState = () => useContext(GlobalStateContext)
const UseGlobalStateUpdate = () => useContext(GlobalStateUpdateContext)

function GlobalStateProvider({ children }) {

    const [data, setData] = useState({
        role: null,
        user: null,
        loginStatus: false,
        orderUser: null
    })


    // useEffect(() => {

    //     axios({
    //         method: "get",
    //         url: BaseURL + `/profile`,
    //         withCredentials: true
    //     })
    //         .then(function (response) {
    //             if (response.data.status === 200) {
    //                 setData(prev => ({
    //                     ...prev,
    //                     user: response.data.profile,
    //                     loginStatus: true,
    //                     role: response.data.profile.role
    //                 }))
    //             }
    //         })
    //         .catch(function (error) {
    //             if (error && error.response && error.response.status) {
    //                 setData(prev => ({ ...prev, loginStatus: false }))
    //             }
    //         })

    //     return () => {
    //         // console.log("cleanup")
    //     }
    // }, [])

    return (

        <GlobalStateContext.Provider value={data}>
            <GlobalStateUpdateContext.Provider value={setData}>
                {children}
            </GlobalStateUpdateContext.Provider>
        </GlobalStateContext.Provider>

    )
}


export { UseGlobalState, UseGlobalStateUpdate, GlobalStateProvider }