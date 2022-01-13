import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import CartDropdown from "../CartDropdown/CartDropdown";

const NavBar = (props) => {
  const [navBarActive, setNavBarActive] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [hiddenCart, setHiddenCart] = useState(true);
  const showMenu = () => {
    setNavBarActive(!navBarActive);
    setHidden(true);
  };
  const handleHidden = () => {
    setHiddenCart(!hiddenCart);
  };
  const signOut = () => {
    localStorage.removeItem("loggedUser");
    props.setLoggedUser("");
  };

  return (
    <div className="header">
      <div onClick={showMenu}>
        <i className="fas fa-bars burgerMenu"></i>
      </div>

      <div className="nav">
        <div className="navCenter">
          <Link to="/">
            <img
              src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"
              alt="logo"
              width={200}
            />
          </Link>
        </div>
        <ul className={`${navBarActive ? "activeBurger" : ""} topList`}>
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          {props.loggedUser ? (
            <div className="sign-out">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li onClick={signOut}>
                <Link to="/login">Sign Out</Link>
              </li>
            </div>
          ) : (
            <li>
              <Link to="/login">SIGN IN</Link>
            </li>
          )}
        </ul>
        {props.loggedUser ? (
          <div className="shoppingCart" onClick={handleHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">
              {props.loggedUser.cartItems.reduce(
                (total, item) => total + item.quantity,
                0
              )}
            </span>
          </div>
        ) : null}
      </div>
      {hiddenCart ? null : (
        <CartDropdown
          loggedUser={props.loggedUser}
          handleHidden={setHiddenCart}
          setLoggedUser={props.setLoggedUser}
        />
      )}
    </div>
  );
};

export default NavBar;
