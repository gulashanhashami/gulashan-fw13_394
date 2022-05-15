
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CartPage } from './components/CartPage';
import { Address } from './components/checkout/Address';
import { Detalis } from './components/Details';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { ProductList } from './components/ProductList';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/productlist' element={<ProductList />} />
       <Route path='/products/:id/details' element={<Detalis />} />
       <Route path='/products/cart' element={<CartPage />} />
       <Route path='/products/address' element={<Address />} />
     </Routes>
     
    </div>
  );
}

export default App;
