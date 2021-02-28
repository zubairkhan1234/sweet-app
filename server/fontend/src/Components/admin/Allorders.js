import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseURL } from '../Url/BaseURL'

export default function Allorders() {

    const [order, setorder] = useState([])

    useEffect(() => {

        axios({
            method: "get",
            url: BaseURL + '/getorders',
            withCredentials: true
        })
            .then(function (response) {

                if (response.status === 200) {
                    console.log(response.data.data)
                    console.log("lkdflasdfkj ", response.data.data)
                    setOrder(response.data.data)

                }
            })
            .catch(function (error) {

            })
    }, [])


    return (
        <div>

            return{order.map((value, index) => (
                <div>{value.total}</div>
            ))}

        </div>
    )
}
