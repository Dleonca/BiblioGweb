import './App.css'
import Catalogo from './components/Catalogo';
import Inicio from './components/Inicio';
import HomeUser from './components/HomeUser';
import React from 'react';
import "./assets/css/general.css";
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return (
       <Router>
         <Routes>
           <Route path='/' element={<Inicio/>}></Route>
           <Route path='Catalogo' element={<Catalogo/>}></Route>
           <Route path='HomeUser' element={<HomeUser/>}></Route>
         </Routes>
     </Router>
  )
}

export default App
