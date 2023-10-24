import './App.css'
import Catalogo from './components/Catalogo';
import Cabecera from './components/Cabecera';
import Inicio from './components/Inicio';
import React from 'react';
import "./assets/css/general.css";
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return (
       <Router>
       <div className="img-body">
         <Cabecera/>
         <Routes>
           <Route path='/' element={<Inicio/>}></Route>
           <Route path='Catalogo' element={<Catalogo/>}></Route>
         </Routes>
       </div>
     </Router>
  )
}

export default App
