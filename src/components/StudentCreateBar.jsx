import React, { useState } from "react";
import SelectOptions from "./SelectOptions";

const CRUDBar = ({ toggleModal, setStudent, courses, setCurrentCourse}) => {

  const [search, setSearch] = useState("");

  const handleCreate = () => {
    setStudent(null);
    toggleModal();
  };

  const handleChangeOptions = (e) => {
    console.log(e.target.value);
    setCurrentCourse(e.target.value);
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  }

  return (
    <div className="container flex flex-col md:flex-row items-center justify-between">
      <div className="order-first md:order-none mt-4 md:mt-0 w-1/2 md:w-auto pb-4 md:pb-0">
        {courses && courses.length === 0 ? (
          <p className="text-gray-500 text-sm">No tienes cursos</p>) :(
            <SelectOptions onChange={handleChangeOptions} options={courses}/>
          )}
      </div>
      <div className="order-second md:order-second flex">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md mr-2"
          onClick={handleCreate}
        >
          Crear
        </button>
        <form className="relative" onSubmit={handleSubmit}>
          <input
            type="text"
            className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-1"
            placeholder="Buscar"
            value={search}
            onChange={handleChangeSearch}
            id="search-input"
          />
          <button className="absolute right-0 top-0 bottom-0 flex items-center pr-2" type="submit">
            <svg
              className="h-4 w-4 text-gray-500 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 0C4.029 0 0 4.029 0 9s4.029 9 9 9s9-4.029 9-9s-4.029-9-9-9zm0 16.2c-3.861 0-7.2-3.139-7.2-7.2s3.139-7.2 7.2-7.2s7.2 3.139 7.2 7.2s-3.139 7.2-7.2 7.2zm5.963-9.273l-3.31 3.31a.742.742 0 0 1-1.05-1.05l3.31-3.31a5.55 5.55 0 1 1 1.05 1.05z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CRUDBar;
