import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({ products, selectedCategory, 
    searchInput, handleAddItemToCart, 
    handleRemoveItemFromCart, shoppingCart})
{
    let filteredProducts;
    if(selectedCategory === "all categories")
    {
        filteredProducts = products;
    }
    else
    {
        filteredProducts = products.filter((product) => { return product.category === selectedCategory});    
    }
    if(searchInput)
    {
        filteredProducts = filteredProducts.filter((product) => { return product.name.toLowerCase().includes(searchInput.toLowerCase())})
    }
    return(
    <>
        <h2>Best Selling Products</h2>
        <div className="product-grid">
            {filteredProducts.map((product) => (
                <ProductCard 
                    key={product.name}
                    products={product}
                    showDescription={false}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                    shoppingCart={shoppingCart}
                />
                ))}
        </div>
    </>
    );
}
