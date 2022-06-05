import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// context
import { CounterContextProvider } from './context/CounterContext'
import { TitleColorContextProvider } from './context/TitleColorContext';

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <CounterContextProvider>
        <TitleColorContextProvider>
          <App />
        </TitleColorContextProvider>
      </CounterContextProvider>

    </BrowserRouter>
  </React.StrictMode>
)
