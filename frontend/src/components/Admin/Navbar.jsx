import React, { useState } from "react";
import LOGO from "../../assets/Logo.png";
import images from "./images.jpeg"; // Make sure to import your image file properly

const Navigation = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const altText = "User Avatar"; // Provide an appropriate alt text for your avatar image

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      {isSidebarVisible && (
        <div className="fixed inset-y-0 right-5  w-1/5 bg-gray-800 text-white p-4" style={{ marginTop: '109px' }}>
          <div className="text-xl font-bold mb-4">Admin</div>
          <ul>
            <li>
              <a href="/Admin/Settings">Settings</a>
            </li>

            <li>
              <a href="/Admin">DashBoard</a>
            </li>

            <li>
              <a></a>
            </li>
          </ul>
        </div>
      )}

      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-theme-light-dark-2 bg-theme-light-dark py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-xl">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <img
                  className="h-8 w-auto"
                  src={LOGO}
                  alt="BookMyMovieLogo"
                />
                <p className="sr-only">Website Title</p>
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5 ml-auto mr-6">
              <a className="rounded-lg px-2 py-1 text-sm font-medium text-theme-light-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer ml-auto">
                SignOut
              </a>
            </div>
            <div className="flex items-center justify-end gap-3">
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={toggleSidebar}
              >
                <img
                  src={images}
                  alt={altText}
                  className="rounded-full h-12 w-12 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
