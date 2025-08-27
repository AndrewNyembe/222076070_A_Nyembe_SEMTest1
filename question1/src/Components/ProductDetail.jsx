import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);  

  
  useEffect(function () {
    fetch("https://fakestoreapi.com/products/" + id)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setProduct(data);
      });
  }, [id]);

  
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "200px", height: "200px", objectFit: "contain" }}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <Link to="/">Back to Products</Link>
    </div>
  );
}

export default ProductDetail;
