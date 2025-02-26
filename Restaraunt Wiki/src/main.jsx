import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Header.css'
import './ImageSlider.css'
import './Components.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
