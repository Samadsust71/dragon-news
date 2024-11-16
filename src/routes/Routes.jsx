import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayouts from '../layouts/HomeLayouts';
import AuthLayouts from '../layouts/AuthLayouts';
import ErrorPage from '../pages/ErrorPage';
import CategoryNews from '../pages/CategoryNews';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NewsDetails from '../pages/NewsDetails';
import PrivateRoutes from './PrivateRoutes';

const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayouts/>,
      children:[
        {
          path:"",
          element: <Navigate to={'/category/01'}></Navigate>
        },
        {
          path:"/category/:id",
          element: <CategoryNews></CategoryNews>,
          loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        }
      ]
    },
    {
      path: "/news/:id",
      element: <PrivateRoutes> <NewsDetails/> </PrivateRoutes>,
      loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
      path: "/auth",
      element: <AuthLayouts/>,
      children:[
        {
          path:"/auth/login",
          element: <Login></Login>
        },
        {
          path:"/auth/register",
          element:<Register></Register>
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage/>
    },
  ]);

export default routes

