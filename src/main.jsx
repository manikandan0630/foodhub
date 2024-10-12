import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
{/*Font Inter library  */}
import  "@fontsource/inter";
import "@fontsource/inter/400.css"
import "@fontsource/inter/400-italic.css"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
