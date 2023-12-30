import { useEffect, useState } from "react";
import LOGO from "../../assets/Logo.png";
import useAuth from "../../hooks/useAuth";
import { IoIosExit } from "react-icons/io";
import { Link } from "react-router-dom";
const Navigation = () => {
  const { auth, isLoading, error } = useAuth();
  const [authStatus, setAuthStatus] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user-token");
    setAuthStatus(false);
  };
  useEffect(() => {
    const tokenObject = JSON.parse(localStorage.getItem("user-token"));
    async function authenticate() {
      if (tokenObject && tokenObject.token) {
        const user = await auth(tokenObject.token);
        if (user) {
          setAuthStatus(true);
        } else {
          setAuthStatus(false);
        }
      } else {
        setAuthStatus(false);
      }
    }
    authenticate();
  });

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-theme-light-dark-2 bg-theme-light-dark py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-xl">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <img
                className="h-8 w-auto"
                src={LOGO}
                alt="BookMyMovieLogo"
              ></img>
              <p className="sr-only"></p>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              to={"/Movielist"}
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-theme-light-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
              Movies
            </Link>
            <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-theme-light-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
              Theatres
            </a>
          </div>
          <div className="flex items-center justify-end gap-3">
            {!authStatus ? (
              <a
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-theme-light-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href={"/login"}
              >
                Login
              </a>
            ) : (
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-theme-light-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {"@ " +
                  JSON.parse(localStorage.getItem("user-token"))["username"]}
              </button>
            )}

            {dropdownOpen && authStatus && (
              <div className="origin-top-right absolute right-4 mt-24 w-20 rounded-md shadow-lg bg-theme-light-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <p
                    className="flex gap-2 flex-row  items-center cursor-pointer  px-2 py-1 text-sm text-theme-light-dark-2 font-medium hover:bg-gray-100 hover:text-gray-900 "
                    role="menuitem"
                    onClick={handleLogout}
                  >
                    Logout <IoIosExit />
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navigation;
