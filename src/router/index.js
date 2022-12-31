import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/views/home/index'))
//页面懒加载，懒加载是异步加载，正常页面会先渲染loading再展示页面，相当于两次渲染
const Entire = React.lazy(() => import('@/views/entire/index'))
const Detail = React.lazy(() => import('@/views/detail/index'))
const routes = [
  { path: '/', element: <Navigate to="home" /> },
  { path: '/home', element: <Home /> },
  { path: '/entire', element: <Entire /> },
  { path: '/detail', element: <Detail /> },
]
export default routes
