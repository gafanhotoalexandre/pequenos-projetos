import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CounterContextProvider } from './context/CounterContext'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
