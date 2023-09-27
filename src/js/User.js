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