import axios from "axios"
import { getToken } from "../js/Token"


export function AxiosInterceptor () {
    const updateHeader = (request) => {
        const token = getToken()
        const newHeader = {
            ...request.headers,
            Authorization: `${token}`,
            "Content-Type": "application/json"
        }
        request.headers = newHeader
        
        return request
    }
    
    axios.interceptors.request.use((request ) => {
        console.log("request", request)
        if(request.url.includes("prv")) updateHeader(request)
        return request
    })

    axios.interceptors.response.use((response) => {
        console.log("response",response)
        return response
    }, (error) => {
        console.log("error", error.code)
        return Promise.reject(error)}
    )
}