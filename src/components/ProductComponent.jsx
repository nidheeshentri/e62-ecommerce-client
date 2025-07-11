import React from 'react'

const ProductComponent = (props) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={props.product.productImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.product.productName}</h2>
                <p>${props.product.productPrice}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent