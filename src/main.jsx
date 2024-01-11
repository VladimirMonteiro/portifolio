import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'



//pages
import Home from '../pages/home/Home.jsx'
import ProjectsPages from '../pages/projectsPage/ProjectsPage.jsx'



const router = createBrowserRouter ([{
  path: '/',
  element: <App/>,
  children: [
    {
      path: '/',
      element: <Home/>
    },
  
    {
      path: '/projetos/:name',
      element: <ProjectsPages/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
