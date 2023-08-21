"use client";
import { UserContext } from "@/app/context/userContext";
import Image from "next/image";
import { useContext, useState } from "react";
const MiniUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {user, logout } = useContext(UserContext)
  const userData = user;

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="hidden sm:ml-6 sm:flex sm:items-center">
      <div className="flex-shrink-0">
        <span className="text-black dark:text-gray-100">{`${userData.name} ${userData.lastname}`}</span>
      </div>
      <div className="ml-3 relative">
        <div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            id="user-menu"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span className="sr-only">Open user menu</span>
            <Image alt="profile"
              src="/user-1.png"
              width={32}
              height={32}
              className=""
            />
          </button>
        </div>
        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniUser;
