import { useState, useEffect, useRef } from "react";
import "../../index.css";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const checkboxRef = useRef(null);

  const closeMenu = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  return (
    <>
      <nav className="fixed w-full order-gray-200 top-0 z-50 bg-transparent">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className={`flex items-center space-x-3 rtl:space-x-reverse ${
              scrolling
                ? "bg-primary py-2 px-5 rounded-full shadow-lg"
                : "bg-transparent"
            } `}
          >
            <img src={logo} className="h-8 header-logo " alt="Logo" />
          </NavLink>

          {/* Mobile Menu */}
          <label
            className="relative md:hidden z-40 cursor-pointer px-3 py-6 bg-primary rounded-xl shadow-lg m-20px"
            htmlFor="mobile-menu"
          >
            <input
              ref={checkboxRef}
              className="peer hidden"
              type="checkbox"
              id="mobile-menu"
            />
            <div className="relative z-50 block h-[1px] w-7 bg-transprent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-white before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-white after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
            <div className="fixed inset-0 z-40 hidden h-full w-full backdrop-blur-md peer-checked:block">
              &nbsp;
            </div>
            <div className="fixed top-0 right-0 z-40 w-full -translate-y-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-y-0">
              <div className="float-right min-h-full w-[100%] bg-gray-950 px-6 rounded-br-2xl rounded-bl-2xl pt-24 pb-16 justify-center flex text-center shadow-2xl text-white">
                <menu className="flex flex-col gap-4">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `${
                          isActive ? "bg-primary" : ""
                        } block py-2 px-6 text-white rounded-full md:bg-transparent md:p-0`
                      }
                      aria-current="page"
                      onClick={closeMenu}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `${
                          isActive ? "bg-primary" : ""
                        } block py-2 px-6 text-white rounded-full md:bg-transparent md:p-0`
                      }
                      onClick={closeMenu}
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `${
                          isActive ? "bg-primary" : ""
                        } block py-2 px-6 text-white rounded-full md:bg-transparent md:p-0`
                      }
                      onClick={closeMenu}
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        `${
                          isActive ? "bg-primary" : ""
                        } block py-2 px-6 text-white rounded-full md:bg-transparent md:p-0`
                      }
                      onClick={closeMenu}
                    >
                      Contact
                    </NavLink>
                  </li>
                </menu>
              </div>
            </div>
          </label>
          {/* Desktop Nav Menu */}
          <div
            className={`hidden w-full md:block md:w-auto shadow-lg bg-slate-700 backdrop-blur-lg p-2 rounded-full ${
              scrolling
                ? "bg-slate-700/25 transition-all duration-500"
                : "bg-slate-700 transition-all duration-500"
            }`}
            id="navbar-default"
          >
            <ul className="main-menu font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <NavLink
                  to="/"
                  className=" ${isActive ? '' : ''} block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="${isActive ? '' : ''} block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 md:p-0 "
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="${isActive ? '' : ''} block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 md:p-0 "
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="${isActive ? '' : ''} block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 md:p-0 "
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
