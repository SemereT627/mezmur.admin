import React, { useState } from "react";
import { AiOutlineClockCircle, AiOutlineDashboard } from "react-icons/ai";
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsFillCalendarCheckFill,
} from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useLocation } from "react-router-dom";
import begenaLogo from "../../assets/images/begena.png";
import { MdOutlineCardMembership, MdSubscriptions } from "react-icons/md";

const Layout = ({ children }) => {
  /**
   * states
   */

  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [showText, setShowText] = useState(true);
  const [click, setClick] = useState(false);
  const [title, setTitle] = useState();
  const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);

  /**
   * selectors
   */

  /**
   * functions
   */

  /**
   * effects
   */

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
      title: "Mezmurs",
      icon: <BsFillCalendarCheckFill />,
    },
    {
      title: "Subscription",
      icon: <MdSubscriptions />,
      path: "/subscription",
    },
    {
      title: "Membership",
      icon: <MdOutlineCardMembership />,
    },
    {
      title: "Attendance",
      icon: <AiOutlineClockCircle />,
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
          <div className="bg-main flex flex-row absolute -right-[21.4rem]">
            <BsArrowLeftShort
              className={`bg-white-main text-primary text-3xl rounded-full border top-8 cursor-pointer z-20 ${
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

            <nav className="ml-8 z-50" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <a
                      href="/"
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Projects
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <a
                      href="/"
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Projects
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

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
                  <a key={index} href={menu.path} className="z-50">
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
                                <a
                                  key={index}
                                  href={child.path}
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
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    }
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Content */}
        <div className="bg-main w-full overflow-y-auto">
          {/* Topbar */}
          <div className="h-20 flex justify-end items-center gap-5 py-4 sticky bg-main top-0 z-10">
            <div className="drop-shadow-md rounded-lg bg-white-main p-3 ">
              <IoIosNotificationsOutline className="cursor-pointer" />
            </div>
            <div className="text-secondary">
              Hi,{" "}
              {/* {user.fullName !== undefined ? user.fullName.split(" ")[0] : null} */}
            </div>
            <div
              onClick={() => setShowAvatarDropdown(!showAvatarDropdown)}
              className="w-14 h-14 flex items-center rounded-full border border-gray-100 shadow-sm mr-4 cursor-pointer"
            >
              <img src={begenaLogo} alt="fitness logo" />
            </div>
            {/* <AvatarDropdown visible={showAvatarDropdown} /> */}
          </div>
          <div className="py-4 px-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
