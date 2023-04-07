import React, { useState } from "react";
import { useContext } from "react";
// creacion de contexto
const CartContext = React.createContext([])
// enviamos el contexto hacia otros componentes exportandolo.
export const useCartContext = () => useContext(CartContext);


// creando un provider O proveedor de FUNCIONES O ESTADOS.

const CartProvider = () => {
// adentro del cart provider, van a ir todas las funciones y estados que necesitemos para la app.
    const [data,setData] = useState()
    
    const agregarAlcarrito = () => {
        console.log('agregar alcarrito')
    }
    const eliminarDelCarrito = () => {
        console.log('agregar alcarrito')
    }


    return(
        // llamamos al nombre del contexto y luego la palabra reservada provider
        <CartContext.Provider value={{eliminarDelCarrito,data,setData}}>
            {/* este children lo que hace es indicar que se va a distribuir a todos los hijos que inquemos */}
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;
