import axios, { Axios } from "axios";
import BaseURL from "../config";



export const GET = async (url) => {
    await axios.get({ url }).then((response) => {
        return response
    }).catch((error) => {
        return error
    })
}

export const GET_WITH_PARAMS = async (url, params) => {
    await axios.get({ url, params }).then((response) => {
        return response
    }).catch((error) => {
        return error
    })
}


export const POST = async (url, data) => {
    await axios.post({ url, data }).then((response) => {
        return response
    }).catch((error) => {
        return error
    })
}
export const UPDATE = async (url, params, data) => {
    await axios.put({ url, data }).then((response) => {
        return response
    }).catch((error) => {
        return error
    })
}
export const DELETE = async (url, id) => {
    await axios.delete({ url, data }).then((response) => {
        return response
    }).catch((error) => {
        return error
    })
}