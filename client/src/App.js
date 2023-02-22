import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Carrito from './components/Carrito/Carrito';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Productos from './components/Productos/ProductosList';
import Detail from './components/Detail/Detail';


function App() {
  return (
    <BrowserRouter>
        <NavBar/>  
        <Routes>
          <Route path="/" element={<Navigate replace to="/inicio" />} />
          <Route path="/inicio/productos/1" element={<Navigate replace to="/productos/1" />} />
          <Route path="/inicio/productos/indumentaria" element={<Navigate replace to="/productos/indumentaria" />} />
          <Route path="/inicio/productos/zapatillas" element={<Navigate replace to="/productos/zapatillas" />} />
          <Route path="/inicio/productos/relojes" element={<Navigate replace to="/productos/relojes" />} />
          <Route path="/inicio/productos/electronica" element={<Navigate replace to="/productos/electronica" />} />
          <Route path="/inicio" element ={<Home/>}/>
          <Route path="/productos/:pageId" element ={<Productos/>}/>
          <Route path="/detail/:pageId" element ={<Detail/>}/>
          <Route path="/carrito" element ={<Carrito/>}/>
          <Route path="/productos/1/carrito" element={<Navigate replace to="/carrito" />} />
          <Route path="/carrito/checkout" element ={<Checkout/>}/>
          <Route path="/ingresar" element ={<Login/>}/>
        </Routes>
        <Footer/>

    </BrowserRouter>
  );
}

export default App;
