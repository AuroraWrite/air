import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './assets/css/index.less'
import './assets/css/common.less'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { theme } from './assets/theme'
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    {/* 页面先加载redux的再加载loading，所以这个Suspense要放在里面*/}
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
)
