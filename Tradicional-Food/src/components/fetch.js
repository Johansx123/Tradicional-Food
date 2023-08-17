export const registrwer = () =>{
const data = {
    Email: "johans23@outolo.comsa",
    Passoword: "12345",
    Name: "Johan Gomez1",
    Phone: "3133117316"

}
fetch('https://api.tradicionalfood.com/api/users/register',
  {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    // mode: "cors", // no-cors, *cors, same-origin
    origin: "http://localhost:5173/Registerer",
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
   })
   .then(response => response.json())
   .then(data => console.log(data))
}