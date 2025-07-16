import React, {useEffect, useState} from 'react'
import axios from 'axios'
const api_domain = import.meta.env.VITE_API_DOMAIN

const CartPage = () => {
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        const header = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        axios.get(`${api_domain}/api/user/cart-items`, header)
        .then(res => {
            setCartItems(res.data.cartItems)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [])
    return (
        <div>
            <ul className="list bg-base-100 rounded-box shadow-md">

                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>
                {cartItems.map((cart, setCart) => {
                    return (
                        <li className="list-row">
                            <div><img className="size-10 rounded-box" src={cart.product.productImage} /></div>
                            <div>
                                <div>{cart.product.productName}</div>
                                <div className="text-xs uppercase font-semibold opacity-60">${cart.product.productPrice}</div>
                            </div>
                            <button className="btn btn-square btn-ghost">
                                -
                            </button>
                            <p className="btn">
                                {cart.quantity}
                            </p>
                            <button className="btn btn-square btn-ghost">
                                +
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CartPage