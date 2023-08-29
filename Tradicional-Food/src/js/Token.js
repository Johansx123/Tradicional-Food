export const getToken = () => localStorage.getItem('loggedTradicionalFoodUser')
export const setToken = (item) => localStorage.setItem('loggedTradicionalFoodUser', item)
export const deleteToken = () => localStorage.removeItem('loggedTradicionalFoodUser')