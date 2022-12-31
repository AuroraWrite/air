import React, { memo, useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from '@/components/app-header/index'
import AppFooter from './components/app-footer'
const App = memo(() => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0) //检测到页面路径发生改变，则自动跳到对应页面顶部
  }, [location.pathname])
  return (
    <div className="app">
      <AppHeader> </AppHeader>
      <div className="pages">{useRoutes(routes)}</div>
      <div className="footer"></div>
      <AppFooter />
    </div>
  )
})

export default App
