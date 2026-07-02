/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rbg(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} alt="" />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Company</p>
            <a href="" style={{ textDecoration: "none" }}>
              About
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Product
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Pricing
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Referral program
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Careers
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Zerodha.tech
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Press & media
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Zerodha cares(CRS)
            </a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="" style={{ textDecoration: "none" }}>
              Contact
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Support portal
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Z-Connect blog
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              List of charges
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Downloads & resources
            </a>
            <br />
          </div>
          <div className="col">
            <p> Account</p>
            <a href="" style={{ textDecoration: "none" }}>
              Open an Account
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Fund transfer
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              60 day challenge
            </a>
            <br />
          </div>
        </div>
       
      </div>
    </footer>
  );
}
export default Footer;
