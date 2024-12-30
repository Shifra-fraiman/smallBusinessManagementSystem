// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Home } from "./pages/HomePage/HomePage.page";
// import { ResponsiveAppBar } from './components/Header/Header.component'
import ResponsiveAppBar from "./components/Header/Header.component";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CreateBussinessPage } from "./pages/CreateBussiness/CreateBussinessPage";
import  {AboutPage}  from "./pages/About/AboutPage.page";
import  ContactPage  from "./pages/Contact/ContactPage.page";
import LoginPage from "./pages/Login/LoginPage.page"

function App() {
  return (
    <>
      <Router>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createBussiness" element={<CreateBussinessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
