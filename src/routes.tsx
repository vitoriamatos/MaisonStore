import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './components/ProductDetails/Index'
import CartPage from './components/CartPage/Index'
import Checkout from './components/Checkout'
import Payment from './components/Payment'

// import Product from './pages/Product'

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/produto/:id" element={<ProductDetails />} />
    <Route path="/cart/" element={<CartPage />} />
    <Route path="/checkout/" element={<Checkout />} />
    <Route path="/payment/" element={<Payment />} />
    {/* <Route path="/product/:id" element={<Product />} /> */}
  </Routes>
)

export default RoutesMain
