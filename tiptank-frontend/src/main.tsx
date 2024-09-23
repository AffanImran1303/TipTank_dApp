import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThirdwebProvider } from 'thirdweb/react'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThirdwebProvider><BrowserRouter><App /></BrowserRouter></ThirdwebProvider>
    
  </StrictMode>,
)
