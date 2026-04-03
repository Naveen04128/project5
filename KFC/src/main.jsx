import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Router/App.jsx'
import './App.css'
// import './index.css'
// import Kfc from './Kfc'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  
  </StrictMode>,
)
