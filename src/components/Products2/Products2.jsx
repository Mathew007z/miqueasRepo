import React from 'react'
import Products3 from '../Products3/Products3'
import { useCartContext } from '../../Context/CartContext'

const Products2 = ({data}) => {


  return (
    <div>
        {
            data.map((data) =>(
                <Products3 key={data.id} data={data}/>
            ))
        }
    </div>
  )
}

export default Products2