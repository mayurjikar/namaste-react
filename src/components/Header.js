import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [signInBtn, setsignInBtn] = useState("Login");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on intial render(just once)
  // if dependency array is [signInBtn] => called everytime signInBtn is updated.
  // useEffect(() => {
  //    console.log('useEffect called');
  // }, []);

  const showOnlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {showOnlineStatus ? "🟢" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
          <button
            className="sign-btn"
            onClick={() => {
              signInBtn === "Login"
                ? setsignInBtn("Logout")
                : setsignInBtn("Login");
            }}
          >
            {signInBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
