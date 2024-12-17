// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HebrewDirectionProvider } from './components/Providers/HebrewDirectionProvider.tsx'


createRoot(document.getElementById('root')).render(
  <HebrewDirectionProvider >
  {/* <StrictMode> */}
    <App />
  {/* </StrictMode> */}
  </HebrewDirectionProvider>

)
