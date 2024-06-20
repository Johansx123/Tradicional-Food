import axios from "axios"
import { deleteToken, setToken } from "./Token"




export const ROL = {
    ADMIN : 'admin'
}


export const getUser = () =>{
    return axios.get('/api/prv/users/info').then(response => response.data).catch(e => console.log(e))
   
}
export const sendUser = (Token) =>  {
    setToken(Token)
}

export const  loginUser = (data) => {
    
    return axios.post('/api/users/login', data)
        .then( response => {
            return response.data
        })
        .catch(e => e)
}
    

export const logOutUser = () =>{
    deleteToken()
}