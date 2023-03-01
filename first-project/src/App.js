import logo from './logo.svg';
import './App.css';
import ProductsClass from './components/productsClass';
import ProductsFunction from './components/productsFunction';
import NotFoundComp from './components/notFoundComponent';
import { Routes,Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div >
    <NavbarComponent></NavbarComponent>
    {/* <ProductsClass ></ProductsClass> */}
    {/* <ProductsFunction></ProductsFunction> */}
      <Routes>
        <Route path="/products" >
          <Route index element={<ProductsFunction></ProductsFunction>}></Route>
          <Route path=':name' element={<ProductDetails></ProductDetails>}></Route>
        </Route>
        <Route path="*" element={<NotFoundComp></NotFoundComp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
