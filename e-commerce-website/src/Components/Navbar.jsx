import React,{useState} from "react";
import { Image, Box } from "@chakra-ui/react";
import { Search2Icon, PhoneIcon } from "@chakra-ui/icons";

import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/facebook";
import "react-social-icons/twitter";
import "react-social-icons/youtube";
import "react-social-icons/linkedin";
import "react-social-icons/instagram";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
const naviagate = useNavigate()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="Navbar-div">
      {/* <Box boxSize="90px"> */}
        <Image
          src="https://nuturemite.info/wp-content/uploads/2022/10/nuturmite_logo_tranparent.png"
          alt="nuturemite.png"
          h={'100px'}
         
        />
      {/* </Box> */}

      <div className="pages-div">
      <div className={`pages-2-div ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      {/* <i className="fas fa-bars menu-icon" onClick={toggleMobileMenu}></i> */}
      <button onClick={()=>naviagate('/home')}>HOME</button>
      <button>BLOG</button>
      <button onClick={()=>naviagate('/products')}>SHOP</button>
      <button onClick={()=>naviagate('/cart')} >CART</button>
      <button>MY ACCOUNT</button>
      <button>ABOUT US</button>
      <button onClick={()=>naviagate('/Login')}>LOGIN</button>
      <button onClick={()=>naviagate('/Signup')}>REGISTER</button>
    </div>

       

        <div className="pages-1-div">
          
          <p><i class="fas fa-chevron-right"></i> About us</p>

          <p><i class="fas fa-chevron-right"></i> Contact us</p>
          <a href="tel:+91891993233" className="mobile">
            <PhoneIcon /> 8919993233
          </a>
          <div className="input-container">
            <input type="text" />
            <Search2Icon className="search-icon" />
          
          </div>
          <div className="social-div">
          <SocialIcon
            url="www.facebook.com"
            style={{ height: 25, width: 25 }}
            className="social-icon"
          />

          <SocialIcon
            url="www.twitter.com"
            style={{ height: 25, width: 25 }}
            className="social-icon"
          />

          <SocialIcon
            url="www.youtube.com"
            style={{ height: 25, width: 25 }}
            className="social-icon"
          />
          <SocialIcon
            url="www.linkedin.com"
            style={{ height: 25, width: 25 }}
            className="social-icon"
          />
          <SocialIcon
            url="www.instagram.com"
            style={{ height: 25, width: 25 }}
            className="social-icon"
          />
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
