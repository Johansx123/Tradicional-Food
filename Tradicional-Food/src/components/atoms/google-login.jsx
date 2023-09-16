import btn_google_dark from '../../assets/google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'
 
export default function GoogleLogIn() {
    
    const handleClick = () =>{
        fetch('https://api.tradicionalfood.com/api/users/login', {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "no-cors", // no-cors, *cors, same-origin
            credentials: "same-origin",})
        .then(response => JSON.stringify(response))
        .then(message => console.log(message))
    }
   
   return(
       
       <span   onClick={handleClick}>
            <img src={btn_google_dark} alt="" />
        </span>
    )
      
     
}
  