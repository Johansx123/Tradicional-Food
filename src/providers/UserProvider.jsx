import { useEffect } from "react";
import { useState } from "react";
import { useGetUser } from "../hooks/useGetUser";
import {
  userContext,
  userToggleContext,
  isEditContext,
  isEditToggleContext,
  userOutContext,
  userUpdate,
} from "./userContext";
import { logOutUser, sendUser } from "../js/User";

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user,  setUser] = useState();
  const [isEdit, setIsEdit] = useState();
  const [isLogged, setIsLogged] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { newUser } = await useGetUser();
      if(newUser?.ID){
        setUser(newUser)
      }
      else{
        logOutUser()
      }
    };
    fetchData();
  }, [isLogged]);

  function changeUser() {
    if (user) {
      setUser(false);
    } else {
      setUser(user);
      console.log(user);
    }
  }

  function outUser() {
    setIsLogged(!isLogged);
    logOutUser();
  }
  function updateUser(Token) {
    setIsLogged(!isLogged);
    console.log('provider '+ Token)
    sendUser(Token);
  }
  const changeIsEdit = () => {
    setIsEdit(!isEdit);
  };
  
  return (
    <userContext.Provider value={user}>
      <userUpdate.Provider value={updateUser}>
        <userToggleContext.Provider value={changeUser}>
          <userOutContext.Provider value={outUser}>
            <isEditContext.Provider value={isEdit}>
              <isEditToggleContext.Provider value={changeIsEdit}>
                {children}
              </isEditToggleContext.Provider>
            </isEditContext.Provider>
          </userOutContext.Provider>
        </userToggleContext.Provider>
      </userUpdate.Provider>
    </userContext.Provider>
  );
};
