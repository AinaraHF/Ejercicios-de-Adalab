import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './components/App.jsx'
import Otroejer from './components/Otroejer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Otroejer />
  </StrictMode>,
)
