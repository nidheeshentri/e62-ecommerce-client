import axios from 'axios'
import React from 'react'

const api_domain = import.meta.env.VITE_API_DOMAIN

const ProductComponent = (props) => {
    const addToCart = () => {
        const header = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        axios.post(`${api_domain}/api/user/add-to-cart`, {productId: props.product._id}, header)
        .then(res => {
            console.log(res.data)
            alert(res.data.message)
        })
        .catch(err => {
            console.log(err.response)
        })
    }
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={props.product.productImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.product.productName}</h2>
                <p>${props.product.productPrice}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick = {addToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent