import React, { useEffect, useRef, useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsMusicNoteBeamed,
} from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import begenaLogo from "../../assets/images/begena.png";
import { TbSubtask } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { GiHolyHandGrenade } from "react-icons/gi";
import { NavbarDropdown } from "./NavbarDropdown";

const Layout = ({ children }) => {
  /**
   * states
   */

  const navbarRef = useRef(null);
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [showText, setShowText] = useState(true);
  const [click, setClick] = useState(false);
  const [title, setTitle] = useState();
  const [navbarDropdown, setNavbarDropdown] = useState(false);
  const [navbarTitle, setNavbarTitle] = useState("Dashboard");

  /**
   * selectors
   */

  /**
   * functions
   */

  useEffect(() => {
    // Function for click event
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNavbarDropdown(false);
      }
    };

    // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [navbarRef]);

  /**
   * effects
   */
  useEffect(() => {
    if (location.pathname === "/") {
      setNavbarTitle("Dashboard");
    } else if (location.pathname === "/category") {
      setNavbarTitle("Category");
    } else if (location.pathname === "/sub-category") {
      setNavbarTitle("SubCategory");
    } else if (location.pathname === "/mezmurs") {
      setNavbarTitle("Mezmurs");
    } else if (location.pathname === "/singers") {
      setNavbarTitle("Singers");
    }
  }, [location.pathname]);

  /**
   * destructured variables
   */

  const NON_LAYOUT_ROUTES = [
    "/login",
    "/signUp",
    "/resetPassword",
    "/verifyPhoneNumber",
    "/verifyEmail",
    "/createGym",
  ];

  const MENU = [
    {
      title: "Dashboard",
      icon: <AiOutlineDashboard />,
      path: "/",
    },
    {
      title: "Category",
      icon: <BiCategory />,
      path: "/category",
    },
    {
      title: "SubCategory",
      icon: <TbSubtask />,
      path: "/sub-category",
    },
    {
      title: "Mezmurs",
      icon: <BsMusicNoteBeamed />,
      path: "/mezmurs",
    },
    {
      title: "Singers",
      icon: <GiHolyHandGrenade />,
      path: "/singers",
    },
  ];

  if (NON_LAYOUT_ROUTES.includes(location.pathname)) {
    return <div>{children}</div>;
  }

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div
          className={`bg-white-main h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } duration-300 relative`}
        >
          <div className="h-32 flex flex-row justify-center items-center">
            <img src={begenaLogo} className="w-32" alt="fitness logo" />
          </div>
          <ul className="pt-8 flex flex-col relative h-[85vh]">
            {MENU.map((menu, index) => {
              return (
                <li
                  key={index}
                  className={`cursor-pointer mt-2 rounded-md text-sm ${
                    menu.bottomOrder === 1 &&
                    "absolute bottom-12 left-0 right-0"
                  }  ${
                    menu.bottomOrder === 0 && "absolute bottom-0 left-0 right-0"
                  }`}
                  onClick={() => {
                    setTitle(menu.title);
                    setClick(!click);
                  }}
                >
                  <Link key={index} to={menu.path} className="z-50">
                    <div className="flex items-center hover:bg-light-dark transition-all p-2.5">
                      <span
                        className={`text-xl cursor-pointer block mr-2 ${
                          location.pathname === menu.path
                            ? "text-primary"
                            : "text-dark-light"
                        }`}
                      >
                        {menu.icon}
                      </span>
                      <p
                        className={`font-poppins-regular duration-300
                    ${
                      location.pathname === menu.path
                        ? "text-primary"
                        : "text-dark-light"
                    }`}
                      >
                        {showText && menu.title}
                      </p>
                      {menu.child && (
                        <BsChevronDown
                          className={`text-xl ml-auto transition-all ${
                            menu.title === title
                              ? "text-primary"
                              : "text-dark-light"
                          } 
                            ${menu.title === title && click && "rotate-180"}
                            `}
                        />
                      )}
                    </div>

                    {
                      <div
                        className={`${
                          menu.title === title && click && menu.child
                            ? "block"
                            : "hidden"
                        } transition-all`}
                      >
                        {menu.child && menu.title === title && (
                          <div className="flex flex-col ml-8">
                            {menu.child.map((child, index) => {
                              return (
                                <Link
                                  key={index}
                                  to={child.path}
                                  className="z-50"
                                  onClick={() => {
                                    setTitle(child.title);
                                  }}
                                >
                                  <div
                                    key={index}
                                    className="flex items-center hover:bg-light-dark transition-all p-2.5"
                                  >
                                    <span
                                      className={`text-xl cursor-pointer block mr-2 ${
                                        location.pathname === child.path
                                          ? "text-primary"
                                          : "text-dark-light"
                                      }`}
                                    >
                                      {child.icon}
                                    </span>
                                    <p
                                      className={`font-poppins-regular duration-300 ${
                                        location.pathname === child.path
                                          ? "text-primary"
                                          : "text-dark-light"
                                      }`}
                                    >
                                      {showText && child.title}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    }
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Content */}
        <div className="bg-main w-full overflow-y-auto">
          {/* Topbar */}
          <div
            ref={navbarRef}
            className="h-20 flex justify-between items-center gap-5 py-4 sticky bg-main top-0 z-10 shadow-md"
          >
            <div className="bg-main flex flex-row">
              <BsArrowLeftShort
                className={`bg-main text-primary border-2 border-white-main text-3xl rounded-md ml-4 cursor-pointer z-20 ${
                  !open && "rotate-180"
                }`}
                onClick={() => {
                  setOpen(!open);
                  if (!open) {
                    setTimeout(() => setShowText(!showText), 200);
                  } else {
                    setShowText(!showText);
                  }
                }}
              />
              <div className="ml-8 text-2xl text-primary font-poppins-bold">
                {navbarTitle}
              </div>
            </div>
            <div className="flex flex-row justify-between items-center z-10 h-20">
              <div className="drop-shadow-md rounded-lg bg-white-main p-3 mx-4">
                <IoIosNotificationsOutline className="!text-primary cursor-pointer my-auto" />
              </div>
              <div className="text-primary">Hi, Abebe</div>
              <div
                onClick={() => setNavbarDropdown(!navbarDropdown)}
                className="w-12 h-12 flex items-center rounded-full border border-white-main shadow-sm mx-4 cursor-pointer"
              >
                <img
                  src={begenaLogo}
                  className="bg-contain"
                  alt="fitness logo"
                />
              </div>
              <NavbarDropdown visible={navbarDropdown} />
            </div>
          </div>
          <div className="py-4 px-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
