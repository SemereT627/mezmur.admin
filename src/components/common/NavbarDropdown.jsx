import React from "react";

export const NavbarDropdown = ({ visible }) => {
  /**
   * states
   */

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

  return (
    <div
      className={`${
        visible ? "visible" : "hidden"
      } z-50 absolute top-20 right-4 w-44 bg-white-main rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
    >
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <span className="cursor-pointer block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Dashboard
          </span>
        </li>
        <li>
          <span className="cursor-pointer block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Settings
          </span>
        </li>
        <li>
          <span className="cursor-pointer block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Earnings
          </span>
        </li>
      </ul>
      <div className="py-1">
        <span
          //   onClick={() => dispatch(logOut())}
          className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-red-500 hover:text-white-main dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Log out
        </span>
      </div>
    </div>
  );
};
