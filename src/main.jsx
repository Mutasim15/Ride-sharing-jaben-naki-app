import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import AuthScreen from './Pages/AuthScreen';
import RoleSelection from './Pages/RoleSelection';
import PassengerRegistration from './Pages/Passenger/PassengerRegistration';
import DriverRegistration from './Pages/Driver/DriverRegistration';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:'auth',
    element:<AuthScreen></AuthScreen>
  },
  {
    path:'/role-selection',
    element:<RoleSelection></RoleSelection>
  },
  {
    path:'/register/passenger',
    element:<PassengerRegistration></PassengerRegistration>
  },
  {
    path:'/register/driver',
    element:<DriverRegistration></DriverRegistration>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
