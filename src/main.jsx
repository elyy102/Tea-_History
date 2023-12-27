import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './login.jsx';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Registration from './registration.jsx';
import Catalog_chinatea from './catalog_chinatea.jsx';
import Catalog_herbaltea from './catalog_herbaltea.jsx';
import Catalog_matcha from './catalog_matcha.jsx';
import Catalog_coffee from './coffee.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Profile from './profile.jsx';
import Cart from './cart.jsx';

  const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login />,
    },
    {
        path: "/Registration",
        element: <Registration />,
      },
      {
        path: "/Catalog_chinatea",
        element: <Catalog_chinatea />,
      },
      {
        path: "/Catalog_herbaltea",
        element: <Catalog_herbaltea />,
      },
      {
        path: "/Catalog_matcha",
        element: <Catalog_matcha />,
      },
      {
        path: "/Catalog_coffee",
        element: <Catalog_coffee />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/App",
        element: <App />,
      },
    {
      path: "/",
      element: <App />,
    }
  ]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
  )