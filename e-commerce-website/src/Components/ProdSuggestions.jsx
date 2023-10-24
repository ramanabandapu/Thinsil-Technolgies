import React from "react";
import "./ProdSuggestions.css";
import Rating from "./Rating";
const ProdSuggestions = ({ products }) => {
  return (
    <div className="prod-sugg-grid">
      {products.map((product) => (
        <div key={product.id} className="prod-sugg-item">
          <div className="prod-img">
            <img
              src={`${product.image}`}
              alt={product.title}
              style={{height:'100px'}}
            />
          </div>
          {/* <div className="category">{product.category}</div> */}
          <div className="prod-desc">
            <p className="ellips">{product.title}</p>
            <Rating stars={product.rating.rate} />
            <br/>
            <span className="strike-price">
              {"₹" + product.strikedPrice + ".00"}
            </span>{" "}
            <span className="normal-price">{"₹" + product.price + ".00"}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProdSuggestions;
