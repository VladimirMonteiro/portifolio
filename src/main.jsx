import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'



//pages
import Home from '../pages/home/Home.jsx'
import UpLocacoes from '../pages/projectsPage/UpLocacoes.jsx'
import ReactGram from '../pages/projectsPage/ReactGram.jsx'




const router = createBrowserRouter ([{
  path: '/',
  element: <App/>,
  children: [
    {
      path: '/',
      element: <Home/>
    },
  
    {
      path: '/projetos/Up-Locacoes',
      element: <UpLocacoes/>
    },
    {
      path: '/projetos/ReactGram',
      element: <ReactGram/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
