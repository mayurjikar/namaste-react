import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";

const Header = () => {
  const [signInBtn, setsignInBtn] = useState("Login");
  console.log("Header component");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on intial render(just once)
  // if dependency array is [signInBtn] => called everytime signInBtn is updated.
  useEffect(() => {
     console.log('useEffect called');
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
