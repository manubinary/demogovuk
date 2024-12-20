import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import BasicForm from './components/Form/BasicForm';
import MainLayout from "./components/layout/MainLayout";
import React from "react";

function App() {
  return (
    <Router>
      <Routes className='mainContent'> 
        <Route element={ <MainLayout /> } >
          <Route path='/' element={<Home/>} />
          <Route path='/form' element={<BasicForm/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;