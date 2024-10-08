import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  // let btnName = "LOG IN"
  const [btnName, setBtnName] = useState("LOG IN");
  const onlineStatus = useOnlineStatus();
  const { logInUser } = useContext(UserContext);

  return (
    <>
      <div className="flex justify-between items-center bg-pink-50 shadow-lg p-4 h-24 rounded-lg sm:bg-yellow-200">
        <div className="flex items-center space-x-4">
          <img src={LOGO_URL} alt="Logo" className="h-16 w-auto" />
          <span className="text-xl font-semibold text-gray-800">
            Food Delivery
          </span>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4 space-x-4">
            <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
            <li>
              <Link to="/grocery" className="hover:text-gray-900">
                Grocery
              </Link>
            </li>

            <li>
              <Link to="/" className="hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-900">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-900">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-gray-900">
                Cart
              </Link>
            </li>
            <li>
              <button
                className="bg-green-500 text-white rounded-md p-2 hover:bg-green-600 transition-colors"
                onClick={() => {
                  btnName === "LOG IN"
                    ? setBtnName("LogOut")
                    : setBtnName("LOG IN");
                }}
              >
                {btnName}
              </button>
            </li>
            <li className="px-1 font-bold">{logInUser}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
