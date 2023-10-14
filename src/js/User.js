import { deleteToken, setToken } from "./Token"

export const ROL = {
    ADMIN : 'admin'
}


export const getUser = (TOKEN) =>{
    return fetch('https://api.tradicionalfood.com/users/info', {
        headers : {
            'Authorization' : TOKEN
        }
    })
    .then(response => response.json())
    .then(message => {return message})
}

export const logOutUser = () =>{
    deleteToken()
}
export const sendUser = (Token) =>  {
    console.log('entiti ' + Token)
    setToken(Token)
}