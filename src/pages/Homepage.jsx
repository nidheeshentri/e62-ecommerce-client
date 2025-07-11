import React, {useState} from 'react'
import ProductComponent from '../components/ProductComponent';

const Homepage = () => {
    const [carousals, setCarousals] = useState([
        {"image": "https://m.media-amazon.com/images/I/61Yx5-N155L._SX3000_.jpg"},
        {"image": "https://m.media-amazon.com/images/I/71qcoYgEhzL._SX3000_.jpg"},
        {"image": "https://m.media-amazon.com/images/I/619geyiQI5L._SX3000_.jpg"},
        {"image": "https://m.media-amazon.com/images/I/81hIlE5xocL._SX3000_.jpg"}
    ])

    const [products, setProducts] = useState([
  {
    productID: "p001",
    productName: "Wireless Headphones",
    productImage: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    productPrice: 1999,
  },
  {
    productID: "p002",
    productName: "Smart Watch",
    productImage: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    productPrice: 2999,
  },
  {
    productID: "p003",
    productName: "Bluetooth Speaker",
    productImage: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    productPrice: 1499,
  },
  {
    productID: "p004",
    productName: "Gaming Mouse",
    productImage: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    productPrice: 899,
  },
  {
    productID: "p005",
    productName: "Mechanical Keyboard",
    productImage: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    productPrice: 2199,
  },
  {
    productID: "p006",
    productName: "USB-C Charger",
    productImage: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    productPrice: 699,
  },
  {
    productID: "p007",
    productName: "Laptop Stand",
    productImage: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    productPrice: 1299,
  },
  {
    productID: "p008",
    productName: "Webcam HD",
    productImage: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    productPrice: 1599,
  },
  {
    productID: "p009",
    productName: "External Hard Drive",
    productImage: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    productPrice: 3499,
  },
  {
    productID: "p010",
    productName: "Portable SSD",
    productImage: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    productPrice: 4999,
  },
]);


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
            {products.map((product, index) => {
                return (
                    <ProductComponent product = {product}/>
                )
            })}
            
        </div>
    )
}

export default Homepage