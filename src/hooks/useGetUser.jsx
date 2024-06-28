import { getUser } from "../js/User";
import { getToken } from "../js/Token";

export async function useGetUser () {

  const TOKEN = getToken();
  
  const newUser = await getUser(TOKEN);
  
  return { newUser : newUser};
}
