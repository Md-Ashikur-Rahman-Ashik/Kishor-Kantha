import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky z-10 shadow-md container mx-auto max-w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link to={"/"} className="flex-shrink-0 gap-2 flex items-center">
            <img src="/logo.jpg" alt="Logo" className="h-16" />
            <p className="font-bold">কিশোর কণ্ঠ পাঠক ফোরাম, কুমিল্লা মহানগর</p>
          </Link>

          {/* Hamburger icon for mobile */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <div
            className={`hidden isActive sm:flex sm:items-center sm:space-x-6`}
          >
            <NavLink to="/" className="text-gray-900 hover:text-blue-400">
              হোম
            </NavLink>
            <NavLink
              to="/registration"
              className="text-gray-900 hover:text-blue-400"
            >
              রেজিস্ট্রেশন
            </NavLink>
            <NavLink
              to="/syllabus"
              className="text-gray-900 hover:text-blue-400"
            >
              সিলেবাস
            </NavLink>
            <NavLink to="/notice" className="text-gray-900 hover:text-blue-400">
              নোটিশ
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-900 hover:text-blue-400"
            >
              যোগাযোগ
            </NavLink>
            <NavLink
              to="/about-us"
              className="text-gray-900 hover:text-blue-400"
            >
              আমাদের সম্পর্কে
            </NavLink>
            {/* <a to="#" className="text-gray-900 hover:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 19a3.5 3.5 0 014.95-4.95M12 12V8m0 0V8m0 0a3.5 3.5 0 014.95-4.95M12 12v4m0 0v4"
                />
              </svg>
            </a> */}
          </div>
        </div>
      </div>

      {/* Dropdown Menu for mobile */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden transition duration-300 ease-in-out`}
      >
        <div className="px-2 isActive pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className="text-gray-900 block py-2 rounded-md hover:bg-gray-100 hover:text-blue-400"
          >
            হোম
          </NavLink>
          <NavLink
            to="/registration"
            className="text-gray-900 block py-2 rounded-md hover:bg-gray-100 hover:text-blue-400"
          >
            রেজিস্ট্রেশন
          </NavLink>
          <NavLink
            to="/syllabus"
            className="text-gray-900 py-2 hover:text-blue-400"
          >
            সিলেবাস
          </NavLink>
          <NavLink
            to="/notice"
            className="text-gray-900 block py-2 rounded-md hover:bg-gray-100 hover:text-blue-400"
          >
            নোটিশ
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-900 block py-2 rounded-md hover:bg-gray-100 hover:text-blue-400"
          >
            যোগাযোগ
          </NavLink>
          <NavLink
            to="/about-us"
            className="text-gray-900 block py-2 rounded-md hover:bg-gray-100 hover:text-blue-400"
          >
            আমাদের সম্পর্কে
          </NavLink>
          {/* <a
            to="#"
            className="text-gray-900 block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-400"
          > */}
          {/* User Icon */}
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 19a3.5 3.5 0 014.95-4.95M12 12V8m0 0V8m0 0a3.5 3.5 0 014.95-4.95M12 12v4m0 0v4"
              />
            </svg>
          </a> */}
        </div>
      </div>
    </nav>
  );
}
