import React from 'react'
import { useEffect, useState } from 'react'
import Products2 from '../Products2/Products2'
// useEffect funciona como controlador de nuestro fetch o datos, para que entienda que al momento
// de ejecutar la aplicacion, se traigan una unica vez, y no haga un loop infinito

const Products = () => {
    // creacion del estado para nuestros productos
    const [data, setData] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        // el setData es la FUNCION que le va a indicar que va a guardar el data
        .then(response => setData(response))
        // el useEffect necesita, una dependencia para poder entender, que el codigo, se ejecute una unica vez
        // al momento de crear App
    },[])

  return (
    <div>
     <Products2 data={data}/>
    </div>
  )
}

export default Products;