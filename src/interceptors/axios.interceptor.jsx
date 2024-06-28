import axios from "axios"
import { getToken } from "../js/Token"
import { useDispatch } from "react-redux"
import { MessageTypes, setMessage } from "../redux/states/message.state"	
import { useEffect } from "react"

function AxiosInterceptor () {
    const dispatcher = useDispatch()
    
    useEffect(() => {
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
        


        const requetInterceptor = axios.interceptors.request.use((request ) => {
            if(request.url.includes("prv")) updateHeader(request)
            return request
        })
    
        const responseInterceptor = axios.interceptors.response.use((response) => {
            return response
        }, (error) => {
            dispatcher(setMessage({message: error.response.data.message , type: MessageTypes.error}))
            return Promise.reject(error)}
        )

        return () => {
            axios.interceptors.request.eject(requetInterceptor)
            axios.interceptors.response.eject(responseInterceptor)
        }
    },[])
    
    return null
}

export default AxiosInterceptor