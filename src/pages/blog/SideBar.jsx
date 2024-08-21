import React from "react";

const SideBar = () => {
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="w-64 h-screen p-2 pt-[56px] border-r-2 border-gray-100"
      aria-label="Sidebar"
    >
      <div className="h-full  border-gray-100">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
            >
              <span className="ms-3">Dashboard</span>
            </a>
          </li>

          <li>
            <button
              type="button"
              className="flex items-center w-full border-0 p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 "
              aria-controls="dropdown-example"
              dataCollapseToggle="dropdown-example"
            >
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                Tips
              </span>
            </button>
            <ul id="dropdown-example" className="py-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                >
                  Billing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Invoice
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
