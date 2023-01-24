import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Carrito from './components/Carrito/Carrito';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Productos from './components/Productos/ProductosList';


function App() {
  return (
    <BrowserRouter>
        <NavBar/>  
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="productos/:pageId" element ={<Productos/>}/>
          <Route path="carrito" element ={<Carrito/>}/>
          <Route path="/carrito/checkout" element ={<Checkout/>}/>
          <Route path="/ingresar" element ={<Login/>}/>
        </Routes>
        <Footer/>

    </BrowserRouter>
  );
}

export default App;
