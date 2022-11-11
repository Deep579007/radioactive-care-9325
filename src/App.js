import './App.css';
import Navbar from './components/headers/Navbar.js';
import Newnav from './components/newnavbaar/Newnav.js';
import Maincomp from './components/home/Maincomp';
import LoginAuth from "./components/Login/LoginAuth"
import Login from "./components/Login/Login"
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Pages/Cart';
import RequiredAuth from './components/Hoc/RequiredAuth';

function App() {
  return (
    <>
    <Routes>
      <Route path="/LoginAuth" element={<LoginAuth />}></Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="/cart" element={
        <RequiredAuth>
          <Cart />
        </RequiredAuth>
      }></Route>
    </Routes>
    {/* <Navbar/>
    <Newnav/>
    <Maincomp/> */}
    {/* <Login /> */}
    {/* <LoginAuth /> */}
    </>
  
  );
}

export default App;
