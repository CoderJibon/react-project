import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="logo">
                <Link to="/">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNpEVNMbDqnr95KORXsb4j1yV4jlHBW2fnTw&usqp=CAU"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-8 d-flex align-items-center justify-content-end">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/Shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/about">Team</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact us</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
