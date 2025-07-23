import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { updateCart } from '../globalState/features/cart/cartSlice'
const api_domain = import.meta.env.VITE_API_DOMAIN

const CartPage = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state=>state.cart.value)

    const updateCartHandler = (quantity, cartId) => {
        const header = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        axios.post(`${api_domain}/api/user/update-cart-quantity/${cartId}`, {quantity: quantity}, header)
        .then(res => {
            console.log(res.data)
            dispatch(updateCart(res.data.cartItems))
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    const buyAll = () => {
        const header = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        axios.get(`${api_domain}/api/user/buy-all-cart`, header)
        .then(res => {
            console.log(res.data)
            dispatch(updateCart([]))
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    return (
        <div>
            <ul className="list bg-base-100 rounded-box shadow-md">

                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>
                {cartItems.map((cart, index) => {
                    return (
                        <li className="list-row" key = {index}>
                            <div><img className="size-10 rounded-box" src={cart.product.productImage} /></div>
                            <div>
                                <div>{cart.product.productName}</div>
                                <div className="text-xs uppercase font-semibold opacity-60">${cart.product.productPrice}</div>
                            </div>
                            <button className="btn btn-square btn-ghost" onClick = {() => updateCartHandler(cart.quantity-1, cart._id)}>
                                -
                            </button>
                            <p className="btn">
                                {cart.quantity}
                            </p>
                            <button className="btn btn-square btn-ghost" onClick = {() => updateCartHandler(cart.quantity+1, cart._id)}>
                                +
                            </button>
                        </li>
                    )
                })}
            </ul>
            {cartItems.length
                ?<button className="btn btn-primary btn-block" onClick = {buyAll}>Buy all</button>
                :<p className='text-center'>Cart is empty</p>
            }
        </div>
    )
}

export default CartPage