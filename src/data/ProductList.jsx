// ProductList.js
import React from "react";
import { Link } from "react-router-dom";
import Products from "../products/Products";

function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {Products.map((product) => (
          <li key={product.id}>
            <Link to={`/Product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
