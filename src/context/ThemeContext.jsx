import  { createContext, useState } from 'react'

// Create Context
const ThemeContext = createContext()

// Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [user, setUser] = useState(null)

  return (
    <ThemeContext.Provider value={{ theme, setTheme,user, setUser }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext