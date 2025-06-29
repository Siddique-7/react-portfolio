import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'

function Layout() {
  const {theme} = useTheme()
  return (
    <div 
    className='${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}'
    >
    <Header/>
    <Outlet />
    <Footer />
    </ div>
  )
}

export default Layout