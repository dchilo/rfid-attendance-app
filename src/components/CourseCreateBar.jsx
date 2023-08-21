'use client'
import React from 'react';

const CourseCreateBar = ({toggleModal, setCourse}) => {

  const handleCreate = () => {
    setCourse(null);
    toggleModal();
  }

  return (
        <div className="flex items-center">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleCreate}
          >
            Crear
          </button>
          <div className="relative">
            <input
              type="text"
              className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-1"
              placeholder="Buscar"
            />
            <div className="absolute right-0 top-0 bottom-0 flex items-center pr-2">
              <svg
                className="h-4 w-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.375 3.75A3.625 3.625 0 1 1 3.75 7.375 3.63 3.63 0 0 1 7.375 3.75zm9.177 12.488l-3.892-3.893a5.315 5.315 0 0 0 1.1-3.215c0-2.963-2.41-5.375-5.375-5.375S3.688 5.174 3.688 8.137s2.412 5.375 5.375 5.375c1.057 0 2.031-.308 2.86-.837l3.924 3.925a.628.628 0 0 0 .885 0l.87-.87a.625.625 0 0 0 0-.885z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      );
};

export default CourseCreateBar;
