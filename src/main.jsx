import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './globalState/store'
import { Provider } from 'react-redux'

import UserLayout from './layout/UserLayout';
import Homepage from './pages/Homepage';
import "./styles/global.css"
import CartPage from './pages/CartPage';
import Register from './pages/Register';
import Login from './pages/Login';
import OrdersPage from './pages/OrdersPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <Homepage />
      },
      {
        path: "cart",
        element: <CartPage />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "orders",
        element: <OrdersPage />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router}/>
    </Provider>
  </StrictMode>,
)
