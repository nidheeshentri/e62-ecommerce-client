import React, {useEffect, useState} from 'react'
import ProductComponent from '../components/ProductComponent';
import axios from 'axios';

const api_domain = import.meta.env.VITE_API_DOMAIN

const Homepage = () => {
    const [carousals, setCarousals] = useState([
        {"image": "https://m.media-amazon.com/images/I/61Yx5-N155L._SX3000_.jpg"},
        {"image": "https://m.media-amazon.com/images/I/71qcoYgEhzL._SX3000_.jpg"},
        {"image": "https://m.media-amazon.com/images/I/619geyiQI5L._SX3000_.jpg"},
        {"image": "https://m.media-amazon.com/images/I/81hIlE5xocL._SX3000_.jpg"}
    ])
    useEffect(() => {
      axios.get(`${api_domain}/api/products`)
      .then(res => {
        setProducts(res.data.products)
      })
    }, [])
    const [products, setProducts] = useState([]);


    return (
        <div>
            <div className="carousel w-full">
                {
                   carousals.map((carousal, index) => {
                    return (
                        <div id={`slide${index}`} className="carousel-item relative w-full" key = {index}>
                            <img
                                src={carousal.image}
                                className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href={index == 0? `#slide${carousals.length-1}`: `#slide${index-1}`} className="btn btn-circle">❮</a>
                                <a href={`#slide${index+1}`} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    )
                   }) 
                }
            </div>
            <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {products.map((product, index) => {
                    return (
                        <ProductComponent product = {product}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Homepage