"use client";
import { UserContext } from "@/app/context/userContext";
import { useState, useContext } from "react";
import MiniUser from "./MiniUser";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const {user, logout} = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <nav className="
    bg-white shadow-sm border-gray-100 border-b
    dark:bg-black dark:text-gray-100
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link className="flex-shrink-0"
              href='/'>
              <Image
                alt="Logo"
                src="/logo.png"
                width={40}
                height={40}
              />
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="dark:text-gray-200 text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Inicio
                </a>
                <button
                  type="button"
                  className="dark:text-gray-300 text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  onClick={toggleServices}
                >
                  Servicios
                  <svg
                    className="w-4 h-4 ml-1 text-gray-400 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="absolute mt-16 w-48 bg-white rounded-md shadow-lg z-10">
                    <div className="py-1">
                      <a
                        href="/attendance"
                        className="block px-4 py-2 text-sm dark:text-gray-700 text-black hover:bg-gray-100 hover:text-gray-900"
                      >
                        Tomar asistencia
                      </a>
                      <a
                        href="/mycourses"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        Mis cursos
                      </a>
                      <a
                        href="/students"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        Estudiantes
                      </a>
                      <a
                        href="/coursesattendance"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        Asistencias
                      </a>
                    </div>
                  </div>
                )}
                <a
                  href="#"
                  className="dark:text-gray-300 text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="sm:hidden flex flex-row">
              {
                <span className="dark:text-gray-300 text-black px-3 py-2 rounded-md text-md font-medium">
                  {user ? `${user.name} ${user.lastname}` : ""}
                </span>
              }
              <button
                type="button"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6 fill-current stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={`${isOpen ? "hidden" : "block"}`}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={`${isOpen ? "block" : "hidden"}`}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {user ? (
              <MiniUser/>
            ) : (
              <div
                className={`${isOpen ? "block" : "hidden"} sm:block sm:ml-6`}
              >
                <a
                  href="/login"
                  className="dark:text-gray-300 text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Iniciar sesión
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="dark:text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Inicio
          </a>
          <button
            type="button"
            className="dark:text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium focus:outline-none"
            onClick={toggleServices}
          >
            Servicios
          </button>
          {isServicesOpen && (
            <div className="pl-4">
              <a
                href="/attendance"
                className="dark:text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-1 rounded-md text-sm font-medium"
              >
                Tomar asistencia
              </a>
              <a
                href="/mycourses"
                className="dark:text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-1 rounded-md text-sm font-medium"
              >
                Mis cursos
              </a>
              <a
                href="/students"
                className="dark:text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-1 rounded-md text-sm font-medium"
              >
                Estudiantes
              </a>
              <a
                href="/coursesattendance"
                className="dark:text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-1 rounded-md text-sm font-medium"
              >
                Asistencias
              </a>
            </div>
          )}
          <a
            href="#"
            className="dark:text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contacto
          </a>

          <button 
            onClick={handleLogout}
            className="dark:text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
