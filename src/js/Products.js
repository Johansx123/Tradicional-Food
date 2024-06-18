import axios from "axios";
import { getToken } from "./Token";

const Token = getToken()
  
export const getProducts = () =>{
  return axios.get('/api/products').then(response => response.data).catch(e => console.log(e));
}

export const addProduct = (data) => {

  return fetch("api/api/products", {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    credentials: "same-origin",
    headers: {
      "Authorization": Token,
      "Content-Type": "application/json",
    },
    body : JSON.stringify(data),

  })
  .then((response) =>response.json())
  .then(message => {return message})
  .catch(e => {return e})
};

export const addArrayProducts = (products) => {
  return fetch("/api/api/products/array",{
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    origin: "http://localhost:5173/",
    credentials: "same-origin",
    headers: {
      "Authorization": Token,
      "Content-Type": "application/json",
    },
    body : JSON.stringify(
      products
    )
  })
  .then(response => response.json())
  .then(message => console.log(message))
  .catch(e => console.log(e))

}

export const updateProduct = (id, data) =>{
  return fetch(`/api/api/products/${id}`,{

    method : "PATCH",
    mode: "cors", // no-cors, *cors, same-origin
    origin: "http://localhost:5173/",
    credentials: "same-origin",
    headers: {
      "Authorization": Token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }
  )
  .then(response => response.json())
  .then(message => {return message})
  .catch(e =>{
    return e
  })

}

export const removeProduct = (id) => {
  return fetch(`/api/api/products/${id}`,{
    method: "DELETE",
    mode: "cors", // no-cors, *cors, same-origin
    origin: "http://localhost:5173/",
    credentials: "same-origin",
    headers: {
      "Authorization": Token,
      "Content-Type": "application/json",
    }
  })
  .then(response => response.json())
  .then(message => {return message})
  .catch(e => {return e})
}


