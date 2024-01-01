import { useEffect, useState } from "react";
import LOGO from "../../assets/Logo.png";
import useAuth from "../../hooks/useAuth";
import { IoIosExit } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
const Navigation = () => {
  const { auth, isLoading, error } = useAuth();
  const [authStatus, setAuthStatus] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user-token");
    navigate("/Login");
    setAuthStatus(false);
  };
  useEffect(() => {
    const tokenObjectString = localStorage.getItem("user-token");
    if (tokenObjectString) {
      try {
        const tokenObject = JSON.parse(tokenObjectString);
        if (tokenObject && tokenObject.token) {
          const authenticate = async () => {
            const user = await auth(tokenObject.token);
            setAuthStatus(user !== null);
          };
          authenticate();
        } else {
          setAuthStatus(false);
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        setAuthStatus(false);
      }
    } else {
      setAuthStatus(false);
    }
  }, [auth]);

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-theme-light-dark-2 bg-theme-light-dark py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-xl">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link
              to={"/"}
              aria-current="page"
              className="flex items-center"
              href="/"
            >
              <img
                className="h-8 w-auto"
                src={LOGO}
                alt="BookMyMovieLogo"
              ></img>
              <p className="sr-only"></p>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              to={"/Movielist"}
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-theme-light-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
              Movies
            </Link>
            <Link
              to={"/HallList"}
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-theme-light-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
              Theatres
            </Link>
          </div>
          <div className="flex items-center justify-end gap-3">
            {!authStatus ? (
              <Link
                to={"/login"}
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-theme-light-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Login
              </Link>
            ) : (
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-theme-light-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {"@ " +
                  (localStorage.getItem("user-token")
                    ? JSON.parse(localStorage.getItem("user-token"))["username"]
                    : "Logging Out")}
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
