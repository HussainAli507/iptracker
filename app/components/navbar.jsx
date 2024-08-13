import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-start">
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold text-white space-x-4">
                IP Analytics
              </a>
            </div>
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-white hover:bg-gray-100 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-white hover:bg-gray-100 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Site History
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
