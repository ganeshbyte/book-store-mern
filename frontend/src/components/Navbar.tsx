import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import avatar from "../assets/avatar.png";
import { useSelector } from "react-redux";

interface INavigationOptions {
  label: string;
  href: string;
}

const Navbar = () => {
  const currentUser = true;
  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const navigationOptions: INavigationOptions[] = [
    {
      label: "dashboard",
      href: "/dashboard",
    },
    {
      label: "home",
      href: "/home",
    },
    {
      label: "about",
      href: "/about",
    },
  ];

  return (
    <>
      <header className="max-w-screen-2xl mx-auto px-4 py-6 bg-blue-300 font-primary">
        <nav className="flex justify-between">
          {/* LEFT SIDE */}
          <div className="flex items-center justify-normal gap-32">
            <div className="">
              <Link to={"/"}>
                <RiMenu2Line className="size-6" />
              </Link>
            </div>

            <div className="flex relative">
              <CiSearch className="absolute inline-block inset-y-2"></CiSearch>
              <input
                type="text"
                placeholder="Search..."
                className="px-6 py-1 w-full rounded-md ring-1 ring-gray-300"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-3 right-10 ">
            {currentUser ? (
              <>
                <button
                  onClick={() => {
                    setIsDropDownOpen(!isDropDownOpen);
                  }}
                >
                  <img src={avatar} alt="avatar" />
                </button>
                {isDropDownOpen && (
                  <div className="absolute bg-gray-100 p-2 top-16 right-10 rounded-md shadow-lg">
                    <ul>
                      {navigationOptions.map((option) => {
                        return (
                          <li
                            key={option.label}
                            className="hover:bg-gray-300 p-2 rounded-md"
                            onClick={() => {
                              setIsDropDownOpen(false);
                            }}
                          >
                            <Link to={option.href}>{option.label}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to={"/login"}>
                <FaUser className="size-6" />
              </Link>
            )}

            <FaHeart className="size-6" />
            <button>
              <Link to={"/cart"} className="flex">
                <IoCartOutline className="size-6" />
                <span>{cartItems.length > 0 ? cartItems.length : 0}</span>
              </Link>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
