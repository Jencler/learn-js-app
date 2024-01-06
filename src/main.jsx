import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LearnJsApp } from './LearnJsApp.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LearnJsApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
