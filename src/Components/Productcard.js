import React, { useContext } from 'react'
import {Global} from '../App'

function Productcard() {
    let {data , addToCart} = useContext(Global);
  return (
    <div className="container">
        <div className='row'>
            {data.map((productItem , index) =>(
                <div className="col-4">
                    <div className="card mb-4" key={index}>
                        <img src={productItem.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{productItem.name}</h5>
                            <p className="card-text">{productItem.price}</p>
                            <button className='btn btn-outline-primary' onClick={()=> addToCart(productItem)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Productcard