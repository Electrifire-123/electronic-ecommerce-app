import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { ProductContextProvider } from './context/ProductContextProvider';
import HomePage from './pages/HomePage';
import Footer from './components/Footer'
import ProductsPage from './pages/ProductsPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
        <ProductContextProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/productpage/:title' element={<ProductsPage/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/cart' element={<Cart/>}/>

            </Routes>
            <Footer/>
          </BrowserRouter>
        </ProductContextProvider>
    </div>
  );
}

export default App;
