import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/Root';
import Provider from './Privider/Provider';
import Home from './Pages/Home/Home';
import Test from './Pages/Test/Test';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "/",
    element: <Home/>,
      },
      {
        path: "/test",
    element: <Test/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider><RouterProvider router={router} /></Provider>
  </React.StrictMode>,
)
