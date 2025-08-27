import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    fetch("https://fakestoreapi.com/products")
      .then(function (res) { return res.json(); })
      .then(function (data) { setProducts(data); });
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {products.map(function(product) {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
}

export default ProductList;
