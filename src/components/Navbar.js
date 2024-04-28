import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
        background: "#764abc",
      }}
    >
      <div className="header">
        <img src="./store.jpg" alt="" className="storeLogo" />
        <h2 className="heading">Welcome to the GRAND STORE</h2>
      </div>
      <div className="nav">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link
          className="navLink"
          to="/cart"
          style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
        >
          Cart
          <FaCartPlus style={{ position: "relative" }} />
          <span
            className="cartCount"
            style={{
              position: "absolute",
              top: "2.4rem",
              color: "#fff",
              right: "0.3rem",
            }}
          >
            {items.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
