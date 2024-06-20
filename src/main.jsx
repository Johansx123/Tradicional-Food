import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/slider.css'
import { AxiosInterceptor } from './interceptors/axios.interceptor.jsx'


AxiosInterceptor()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <App />
  </React.StrictMode>,
)
