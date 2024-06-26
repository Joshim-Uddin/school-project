import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Routes from './Routes/Routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes>
    <App />
    </Routes>
  </React.StrictMode>,
)
