import * as React from "react"
import "./ProductDetail.css"
import axios from "axios"
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"

export default function ProductDetail(props){
    const { id } = useParams();
    const [products, setProducts] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const url = `https://codepath-store-api.herokuapp.com/store/${id}`;
                const response = await axios.get(url);
                const data = response.data;
                setProducts(data.product);
            }
            catch(error){
                console.log("error")
            }
        }
        fetchProducts();
     }, []); 

    return(
        <div className="product-detail">
            <h2>{products.name}</h2>
            <img src={products.image} className="product-image"></img>
            <div className="info">
                {products.price && <p>Price: ${products.price.toFixed(2)}</p>}
                <p>{products.description}</p>
                <p>This is a product from our {products.category} category.</p>
            </div>

        </div>
    );
}
