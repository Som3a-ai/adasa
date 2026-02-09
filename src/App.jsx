import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from '/src/Components/Home/Home';
import About from './Components/About/About';
import BlogDetails from './Components/BlogDetails/BlogDetails';


let routes = createBrowserRouter([
  {path:'' , element:<Layout/>, children:[
    {index: true , element:<Home />} ,
    {path:'/blog' , element:<About />} ,
    {path:'/blog/:slug' , element:<BlogDetails />}
  ]}
])


function App() {


  return (
  <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
