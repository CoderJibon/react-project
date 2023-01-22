import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div id="footermenu">
                <h2>menu name</h2>
              </div>
              <Link to="/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNpEVNMbDqnr95KORXsb4j1yV4jlHBW2fnTw&usqp=CAU"
                  alt=""
                />
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                laboriosam tempore, voluptatibus facere fugit perferendis
                architecto officia! Temporibus officiis
              </p>
            </div>
            <div className="col-md-3 ml-5">
              <div className="footermeubox">
                <div id="footermenu">
                  <h2>menu name</h2>
                </div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-md-3 ml-5">
              <div className="footermeubox">
                <div id="footermenu">
                  <h2>menu name</h2>
                </div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-md-3 ml-5">
              <div className="footermeubox">
                <div id="footermenu">
                  <h2>menu name</h2>
                </div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                    <li>
                      <Link to="/">Lorem ipsum dolor</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="footerbottom">
          <div className="container">
            <div className="row">
              <div className="col">
                <p>@copyright coderjibon</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
