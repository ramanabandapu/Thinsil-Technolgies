import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./Homepage.css";
import { FaCartPlus } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import {
  faBuildingLock,
  faCircleQuestion,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Homepage = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/ProductList";

    // Fetch products when the component mounts
    axios
      .get(apiUrl)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);





  return (
    <div className="home-container">
      <Navbar/>
     

      <div className="static-div">
        <div>
          <FontAwesomeIcon
            icon={faTruck}
            color="rgb(93,182,115)"
            fontSize="30px"
          />
          <h5>FREE SHIPPING</h5>
          <p>Free shipping on all orders over ₹2000</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faHandHoldingDollar}
            color="rgb(93,182,115)"
            fontSize="30px"
          />
          <h5>MONEY BACK GUARENTEE</h5>
          <p>100% money back guarentee</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCircleQuestion}
            color="rgb(93,182,115)"
            fontSize="30px"
          />
          <h5>ONLINE SUPPORT 24/7</h5>
          <p>Whatsapp 8919993233 for online support</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faBuildingLock}
            color="rgb(93,182,115)"
            fontSize="30px"
          />
          <h5>SECURE PAYMENT</h5>
          <p>100% secure payments in our portal</p>
        </div>
       
      </div>

      <div className="static-2-div">
        <h1>Popular Departments</h1>
        <p>Products From These Categories Often Buy</p>
        <br />
        <h1>Most Popular</h1>
        <p>All our new arrivals in a exclusive brand selection</p>
      </div>

      
      <div className="static-3-div">
        <h1>This Week's Specials</h1>
        <p>All our new arrivals in a exclusive brand selection</p>
       
      </div>


<div className="products-container">

      <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-item">
                <div className="imgdiv">
                  <img
                    src={`${product.image}`}
                    alt={product.title}
                    // style={{height: 150}}
                  />
                </div>
                <div>
                  <p className="category">{product.category}</p>
                  <p className="ellips">{product.title}</p>
                
                  <div>
                    <span className="strike-price">
                      {"₹" + product.strikedPrice + ".00"}
                    </span>{" "}
                    <span className="normal-price">
                      {"₹" + product.price + ".00"}
                    </span>
                  </div>
                  <div className="cart-btn">
                    <button>-</button>
                    <FaCartPlus style={{fontSize:'50px'}} />
                    <button>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
<Footer/>

    </div>
  );
};

export default Homepage;
