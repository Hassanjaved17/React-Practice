import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'
import { UsersProvider } from './context/UsersContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <UserProvider>
        <UsersProvider> 
          <App />
        </UsersProvider> 
      </UserProvider>
    </ThemeProvider>
  </StrictMode>,
)
