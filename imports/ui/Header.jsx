import React from "react";

export const Header = () => {
  return (
    <header className="bg-gray-800">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ariel-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
