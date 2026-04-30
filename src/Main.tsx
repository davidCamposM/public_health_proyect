import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import MainView from './views/pages/MainView'
import Person from './views/pages/Person'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <MainView />
    <Person />
  </StrictMode>,
)
