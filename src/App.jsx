import React from 'react'
import Products from './components/Products/Products'
import CartProvider from './Context/CartContext'

const App = () => {





  return (
    <div>
        <CartProvider>
                <Products/>
                    <Navbar/>
                    <Container/>
        </CartProvider>
   
    </div>
  )
}

export default App