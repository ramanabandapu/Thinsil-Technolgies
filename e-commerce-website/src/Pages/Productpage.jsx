import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Productpage.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaCartPlus } from "react-icons/fa";
import { Select } from "@chakra-ui/react";
import FilterOptions from "../Components/FilterOptions";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import ProdSuggestions from "../Components/ProdSuggestions";
import Rating from "../Components/Rating";


const ProductPage = ({ id, title, price, addToCart }) => {


  const [products, setProducts] = useState([]);
//  const sortedProducts = useRef(products)
  const Sort = (e) => {
    if(e.target.value === 'option1'){
      setProducts(products.sort((a,b) => a.price-b.price))
    }
  }

  useEffect(() => {
    const apiUrl = "http://localhost:8080/ProductList";

    // Fetch products when the component mounts
    axios
      .get(apiUrl)
      .then((response) => {setProducts(response.data)})
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  //   console.log(products);


  return (
    <div>
      <Navbar />
      <div className="Products">
        <div className="filter-container">
          <div className="filter-div">
            <h3>FILTER BY PRICE : </h3>
            <br />
            <Slider defaultValue={30}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </div>
          <div className="filter-div">
            <FilterOptions />
          </div>

          <div className="prod-suggest-div">
            <ProdSuggestions products={products} />
          </div>
        </div>

        <div>
          <div className="sorting-div">
          
            <Select onChange={Sort} placeholder="Default Sorting" w={"200px"}>
              <option value="option1" >Low to High</option>
              <option value="option2">High to Low</option>
            </Select>
          </div>
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
                  <Rating stars={product.rating.rate} />
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
                    <FaCartPlus className="cart-icon" onClick={() => addToCart(product.id,product.image, product.title, product.price )} />
                    <button>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
