import React from 'react'


const ThemeContext = () => {
    const [theme, setTheme] = React.useState('light')

  return (
    <>
    <div>ThemeContext</div>

    if(theme === 'light'){
        document.documentElement.classList.remove('dark')
    } 
    
    else {
        document.documentElement.classList.add('dark')  
    }
    </>
  )
}

export default ThemeContext;