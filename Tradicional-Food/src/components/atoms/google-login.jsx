import { useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import {gapi} from 'gapi-script'
 
export default function GoogleLogIn() {
    const clientID = '758333741254-3e8735e1hlncku5lru3g6s4c1ubj6l5v.apps.googleusercontent.com'

    useEffect(()=>{
        const start = () =>{
            gapi.client.init({
                clientID: clientID,
                scope : ""
            })
        }
        gapi.load('client:auth2', start)
    },[])
    
    const onSuccess = (response) => {
        console.log(response)
    }
    const onFailure = () => {
        console.log('algo salio mal')
    }
    return(
        <GoogleLogin
            clientId='758333741254-3e8735e1hlncku5lru3g6s4c1ubj6l5v.apps.googleusercontent.com'
            buttonText='Entrar con Google'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'http://localhost:5173/'}
            isSignedIn={true}
        />
    )
      
     
}
