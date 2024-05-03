import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import People from './pages/People';
import PersonDetail from './pages/PersonDetail';
import Login from './pages/Login';
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(false)  // ilk durumda kullanici giris yapmadi
  console.log(login) //true

  return (
    <>
      <Navbar  login = {login} setLogin = {setLogin} />

      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/people'  element={<People />} />
          <Route  path='people/:id' element={<PersonDetail />}    />
          <Route path={'/login'}  element={<Login   login = {login} setLogin = {setLogin} />} />
      </Routes>
    </>
  );
}

export default App;
