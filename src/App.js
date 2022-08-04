import './App.css';
import Navbar from './components/navbar';
import ProductList from './product/ProductList'
import NewProduct from './product/NewProduct'
import Product from './product/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route exact path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/create" element={<NewProduct />}  />
        <Route path="/products/:id/" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
