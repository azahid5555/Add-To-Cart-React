import React, { useContext, useEffect, useState } from 'react'
import {Global} from '../App'

function Cart() {
    let {cart} = useContext(Global);

    const [CART , setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    } , [cart])
    
  return (
    <div className='table-responsive p-5'>
        <table className='table table-striped cart_table text-center'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Add Item</th>
                    <th>Quantity</th>
                    <th>Remove Item</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {CART.map((cartItem , cartIndex) => {
                    return(
                        <tr>
                            <td>{cartItem.name}</td>
                            <td>{cartItem.price}</td>
                            <td><button
                                onClick={() => {
                                    const _CART = CART.map((item , index) => {
                                        return cartIndex === index ? {...item, quantity: item.quantity + 1} : item
                                    })
                                    setCART(_CART)
                                    
                                }}
                            >+</button></td>
                            <td>{cartItem.quantity}</td>
                            <td><button
                                onClick={() => {
                                    const _CART = CART.map((item , index) => {
                                        return cartIndex === index ? {...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0} : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</button></td>
                            <td><img src={cartItem.image} alt="" /></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <div className='mt-5'>
            <p className="lead"><b>The Total Amount is = </b>
                {
                    CART.map(item => item.price * item.quantity).reduce((total , value) => total + value , 0)
                }
            </p>
        </div>
        <div className="mt-2">
            <p className="lead"><b>Shipping Cost is = </b>
                {
                    CART.map(item => item.shipping).reduce((shipping) => 100 , 0) 
                    
                }
                
            </p>
        </div>
        <div className="mt-2">
            <p className="lead"><b>Total Amount = </b>
                {
                    CART.map(item => item.price * item.quantity).reduce((total , value) => total + value , 0)
                }
            </p>
        </div>
    </div>
  )
}

export default Cart