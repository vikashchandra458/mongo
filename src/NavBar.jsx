import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function NavBar() {
  return (
    <div>
      <div className="menu-bar">
        <ul>
          <li>
            <Link to="/FetchNews">News</Link>
          </li>
          <li>
            <Link to="/SMS">SMS Verification</Link>
          </li>
          <li>
            <Link to="/Email">Email Verification</Link>
          </li>
          <li>
            <Link to="/">Signup</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li className="sub-menu-2">
            <p className="support">Support</p>
            <div className="sub-menu-1">
              <ul>
                <li>
                  <a href="skype:985-277-7570">Contact no : +919852777570</a>
                </li>
                <li>
                  <a
                    href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=new"
                    target="blank"
                  >
                    Email Id : vikashchandra458@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
