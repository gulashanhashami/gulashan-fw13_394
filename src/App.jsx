
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Detalis } from './components/Details';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Allproducts } from './components/Products';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/products' element={<Allproducts />} />
       <Route path='/products/:id/details' element={<Detalis />} />
     </Routes>
     
    </div>
  );
}

export default App;
