import { Provider } from 'react-redux'
import React from 'react'
import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import RoutesMain from './routes'
import { store } from './store'
import Cart from './components/Cart'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Header from './components/Header'
import Marketing from './components/Marketing'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Header />
        <div className=""> </div>
        <RoutesMain />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
