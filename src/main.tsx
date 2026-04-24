import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import MainView from './pages/MainView'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <MainView />
  </StrictMode>,
)
