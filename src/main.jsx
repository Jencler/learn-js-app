import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { LearnJsApp } from './LearnJsApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LearnJsApp />
    </BrowserRouter>
  </React.StrictMode>,
)
