export const getToken = () => {
    console.log("token", localStorage.getItem('loggedTradicionalFoodUser'))
    if(!localStorage.getItem('loggedTradicionalFoodUser')) return null
    return localStorage.getItem('loggedTradicionalFoodUser')
}
export const setToken = (item) => localStorage.setItem('loggedTradicionalFoodUser', item)
export const deleteToken = () => localStorage.removeItem('loggedTradicionalFoodUser')