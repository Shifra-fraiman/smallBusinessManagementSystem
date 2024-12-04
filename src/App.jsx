// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/HomePage/HomePage.page'
// import { ResponsiveAppBar } from './components/Header/Header.component'
import ResponsiveAppBar from './components/Header/Header.component';


function App() {
 

  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    <Home></Home>
    </>
  )
}

export default App
