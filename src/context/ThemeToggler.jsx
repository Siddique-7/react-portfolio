import React from 'react'
import { useTheme } from './../context/ThemeContext'

function ThemeToggler() {

  const {toggleTheme, theme} = useTheme()

  return (
    <button 
    className='text-white'
    onClick={toggleTheme}>
     {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}

export default ThemeToggler