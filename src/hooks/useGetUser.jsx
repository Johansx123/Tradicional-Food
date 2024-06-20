import { getUser } from "../js/User";
import { getToken } from "../js/Token";

export async function useGetUser () {

  const TOKEN = getToken();
  console.log("get user toke", TOKEN)
  const newUser = await getUser(TOKEN);
  console.log("newUser", newUser)
  return { newUser : newUser};
}
