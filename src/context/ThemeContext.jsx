import React, { createContext, useState } from 'react'

// Create Context
const ThemeContext = createContext()

// Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext