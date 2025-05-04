import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './components/ProductDetails/Index'

// import Product from './pages/Product'

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/produto/:id" element={<ProductDetails />} />
    {/* <Route path="/product/:id" element={<Product />} /> */}
  </Routes>
)

export default RoutesMain
