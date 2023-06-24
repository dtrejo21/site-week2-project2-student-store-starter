import * as React from "react"
import "./ProductDetail.css"
import axios from "axios"
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"

export default function ProductDetail(props){
    const { id } = useParams();
    const [product, setProduct] = useState(" ");

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const url = `https://codepath-store-api.herokuapp.com/store/${id}`;
                const response = await axios.get(url);
                const data = response.data;
                setProduct(data.product);
            }
            catch(error){
                console.log("error")
            }
        }
        fetchProducts();
     }, []); 

    return(
        <div className="product-detail">
            <h2>{product.name}</h2>
            <img src={product.image} className="product-image"></img>
            <div className="info">
                <p>Price: ${product.price}</p>
                <p>{product.description}</p>
                <p>This is a product from our {product.category} category.</p>
            </div>

        </div>
    );
}
