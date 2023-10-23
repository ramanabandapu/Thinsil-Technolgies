import React from "react";
import "./Footer.css";

import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/facebook";
import "react-social-icons/twitter";
import "react-social-icons/youtube";
import "react-social-icons/linkedin";
import "react-social-icons/instagram";

const Footer = () => {
  return (
    <div>
      <div className="footer-div">
        <div>
          <h4>CUSTOMER SERVICE</h4>
          <br />
          <p>Help & FAQs</p>
          <p>Order Tracking</p>
          <p>Shipping & Delivery</p>
          <p>Orders History</p>
          <p>Advanced Search</p>
          <p>Login</p>
        </div>
        <div>
          <h4>ABOUT US</h4>
          <br />
          <p>About Us</p>
          <p>Careers</p>
          <p>Our Stories</p>
          <p>Corporate Sales</p>
          <p>Careers</p>
        </div>
        <div>
          <h4>MORE INFORMATION</h4>
          <br />
          <p>Affiliates</p>
          <p>Refer a Friend</p>
          <p>Student Beans Offers</p>
          <p>Gift Vouchers</p>
        </div>
        <div>
          <h4>SOCIAL MEDIA</h4>
          <br />
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

      <div className="footer-ad">
        <h1>porto</h1>
        <p>© Copyright 2022. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
