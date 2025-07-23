import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { updateCart } from '../globalState/features/cart/cartSlice'
const api_domain = import.meta.env.VITE_API_DOMAIN

const OrdersPage = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const header = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        axios.get(`${api_domain}/api/user/orders`, header)
        .then(res => {
            console.log(res.data)
            setOrders(res.data.orders)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [])
    return (
        <div>
            <ul className="list bg-base-100 rounded-box shadow-md">

                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Orders list</li>
                {orders.map((orderItem, index) => {
                    return (
                        <li className="list-row" key = {index}>
                            <div><img className="size-10 rounded-box" src={orderItem.product.productImage} /></div>
                            <div>
                                <div>{orderItem.product.productName}</div>
                                <div className="text-xs uppercase font-semibold opacity-60">${orderItem.product.productPrice}</div>
                            </div>
                            <p className="btn">
                                {orderItem.quantity}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default OrdersPage