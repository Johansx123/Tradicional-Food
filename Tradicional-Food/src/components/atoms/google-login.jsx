import btn_google_dark from '../../assets/google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'
 
export default function GoogleLogIn() {
    
    const handleClick = () =>{
        fetch('https://api.tradicionalfood.com/api/users/login')
        .then(response => console.log(response))
    }
   
   return(
       
       <button type='button' onClick={handleClick}>
            <img src={btn_google_dark} alt="" />
        </button>
    )
      
     
}
