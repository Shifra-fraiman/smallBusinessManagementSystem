// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Home } from "./pages/HomePage/HomePage.page";
// import { ResponsiveAppBar } from './components/Header/Header.component'
import ResponsiveAppBar from "./components/Header/Header.component";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CreateBussinessPage } from "./pages/CreateBussiness/CreateBussinessPage";

function App() {
  return (
    <>
      <Router>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createBussiness" element={<CreateBussinessPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
