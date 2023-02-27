import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import PetDetail from './components/PetDetail';
import PetUpdate from './components/PetUpdate';
import AdoptList from './components/AdoptList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element ={<AdoptList/>} path= "/" default/>
          <Route element={<Main />} path="/pets/"/>
          <Route element={<PetDetail/>} path="/pets/:id" />
          <Route element={<PetUpdate />} exact path="/pets/update/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
