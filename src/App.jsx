
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import { CartPage } from './components/CartPage';
import { Address } from './components/checkout/Address';
import { Detalis } from './components/Details';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Payment } from './components/Payment';
import { ProductList } from './components/ProductList';
import { Signin } from './components/signin';
import { Signup } from './components/signup';


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
       <Route path='/products/payment' element={<Payment />} />
       <Route path='/signup' element={<Signup />} />
       <Route path='/signin' element={<Signin />} />
     </Routes>
     
    </div>
  );
}

export default App;
