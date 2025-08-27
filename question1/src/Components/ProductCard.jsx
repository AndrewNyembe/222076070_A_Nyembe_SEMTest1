import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <img
        src={props.image}
        alt={props.title}
        style={{ width: "100px", height: "100px", objectFit: "contain" }}
      />
      <h3 style={{ fontSize: "14px" }}>{props.title}</h3>
      <p>${props.price}</p>
      <Link to={"/products/" + props.id}>View Details</Link>
    </div>
  );
}

export default ProductCard;
