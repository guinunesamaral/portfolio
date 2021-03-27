import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  let path = window.location.pathname;

  return (
    <div className="header">
      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li">
            <Link
              to="/"
              className={
                path === "/"
                  ? "header__link link--bold"
                  : "header__link link--normal"
              }
            >
              Home
            </Link>
          </li>
          <li className="header__li">
            <Link
              to="/projects"
              className={
                path === "/projects"
                  ? "header__link link--bold"
                  : "header__link link--normal"
              }
            >
              Projects
            </Link>
          </li>
          <li className="header__li">
            <Link
              to="/contact"
              className={
                path === "/contact"
                  ? "header__link link--bold"
                  : "header__link link--normal"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/" className="header__icon">
        G N
      </Link>
    </div>
  );
};
