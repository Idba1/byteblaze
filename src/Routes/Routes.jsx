import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'
import Blogs from '../Pages/Blogs'
import Home from '../Pages/Home'
import ErrorPage from '../Pages/ErrorPage'
import Bookmark from '../Pages/Bookmark'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
     
      {
        path: '/bookmark',
        element: <Bookmark></Bookmark>
      },
    ],
  },
])