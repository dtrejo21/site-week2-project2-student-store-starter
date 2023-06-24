import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({products, selectedCategory, searchInput}){
    let filteredProducts;
    if(selectedCategory === "all categories")
    {
        filteredProducts = products;
    }
    else
    {
        filteredProducts = products.filter((product) => {
            return product.category === selectedCategory});    
    }
    if(searchInput)
    {
        filteredProducts = filteredProducts.filter((product) => {
            return product.name.toLowerCase().includes(searchInput.toLowerCase())})
    }
    return(/*Accepts the following props: products*/
    <>
        <h2>Best Selling Products</h2>

        <div className="product-grid">
            {filteredProducts.map((product) => (
                <ProductCard 
                    key={product.id}
                    product={product}
                    showDescription={false}
                />
                ))}
        </div>
    </>
    );
}
