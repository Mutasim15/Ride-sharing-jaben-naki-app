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

import LoginPage from './Pages/PrivateRoute/LoginPage';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import PassengerDashBoard from './Pages/PrivateRoute/PassengerDashboard.jsx';
import DriverDashboard from './Pages/PrivateRoute/DriverDashboard';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: 'auth',
    element: <AuthScreen></AuthScreen>
  },
  {
    path: '/role-selection',
    element: <RoleSelection></RoleSelection>
  },
  {
    path: '/register/passenger',
    element: <PassengerRegistration></PassengerRegistration>
  },
  {
    path: '/register/driver',
    element: <DriverRegistration></DriverRegistration>
  },

  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/passenger-dashboard",
    element: <PrivateRoute>
      <PassengerDashBoard />
    </PrivateRoute>

  },
   {
    path: "/driver-dashboard",
    element: <PrivateRoute>
      <DriverDashboard />
    </PrivateRoute>

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
