import { useEffect } from "react"
import { useState } from "react"
import { useGetUser } from "../hooks/useGetUser";
import { userContext, userToggleContext, isEditContext, isEditToggleContext } from "./userContext";

// eslint-disable-next-line react/prop-types
export  const UserProvider = ({children}) =>{


    const [user, setUser] = useState()
    const [isEdit, setIsEdit] = useState()

    
    
    useEffect(() => {
        const fetchData = async () => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { newUser } = await useGetUser();
          setUser(newUser);
        };
    
        fetchData();
      }, []); 
  

    function changeUser (){

        if(user){
            
            setUser(null)
        }else{
            setUser(user)
            console.log(user)
        }
    }
        
    const changeIsEdit = () =>{
        setIsEdit(!isEdit)
    }

    return(
        <userContext.Provider value={user} >
            <userToggleContext.Provider value={changeUser}>
                <isEditContext.Provider value={isEdit}>
                    <isEditToggleContext.Provider value={changeIsEdit}>
                        {children}
                    </isEditToggleContext.Provider>
                </isEditContext.Provider>
            </userToggleContext.Provider>
            
        </userContext.Provider>
    )
}