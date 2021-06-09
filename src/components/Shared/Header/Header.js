import React, { useState } from "react";

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  return (
    <nav className="bg-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-5 md:px-3 lg:px-0">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center font-bold">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
            <span> Pizza House</span>
          </div>
          <div className="hidden md:flex uppercase space-x-5 items-center font-semibold">
            <a href="/">Home</a>
            <a href="/">Pages</a>
            <a href="/">Menu</a>
            <a href="/">Blog</a>
            <a href="/">Elements</a>
            <a href="/">Contacts</a>
          </div>

          {/* mobile menu  */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setToggleBtn(!toggleBtn)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 font-bold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {toggleBtn && (
          <div className="mt-3 md:hidden bg-gray-700 font-normal">
            <a
              className="block py-1 px-2 text-gray-50 hover:text-gray-300 transition duration-300 transform hover:translate-x-1 border-b border-gray-600"
              href="/"
            >
              Home
            </a>
            <a
              className="block py-1 px-2 text-gray-50 hover:text-gray-300 transition duration-300 transform hover:translate-x-1 border-b border-gray-600"
              href="/"
            >
              Pages
            </a>
            <a
              className="block py-1 px-2 text-gray-50 hover:text-gray-300 transition duration-300 transform hover:translate-x-1 border-b border-gray-600"
              href="/"
            >
              Menu
            </a>
            <a
              className="block py-1 px-2 text-gray-50 hover:text-gray-300 transition duration-300 transform hover:translate-x-1 border-b border-gray-600"
              href="/"
            >
              Blog
            </a>
            <a
              className="block py-1 px-2 text-gray-50 hover:text-gray-300 transition duration-300 transform hover:translate-x-1 border-b border-gray-600"
              href="/"
            >
              Elements
            </a>
            <a
              className="block py-1 px-2 text-gray-50 hover:text-gray-300 transition duration-300 transform hover:translate-x-1 border-b border-gray-600"
              href="/"
            >
              Contacts
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
