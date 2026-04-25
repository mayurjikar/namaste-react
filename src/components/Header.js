import ReactDOM from "react-dom/client";
import { useContext, useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [signInBtn, setsignInBtn] = useState("Login");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on intial render(just once)
  // if dependency array is [signInBtn] => called everytime signInBtn is updated.
  // useEffect(() => {
  //    console.log('useEffect called');
  // }, []);

  const showOnlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);


  return (
    <div className="header flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="logo w-30" src={CDN_URL} alt="logo" />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {showOnlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 font-bold text-xl"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
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
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
