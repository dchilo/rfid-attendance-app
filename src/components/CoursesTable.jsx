"use client";
import { UserContext } from "@/app/context/userContext";
import { getCoursesByUserId } from "@/services/courses";
import React, { useState, useContext, useEffect } from "react";

const CourseTable = () => {

  const { user } = useContext(UserContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if(user){
      fetchCourses();
    }
  },[user])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchCourses = async () => {
    const data = await getCoursesByUserId(user.token);
    setCourses(data);
  }

  return (
    <table className="container w-full table-fixed divide-y divide-gray-300 
      bg-white border-gray-200 border-2 shadow-sm
      dark:bg-neutral-900 rounded-lg">
      <thead>
        <tr className="">
          <th className="w-[40%] py-2">Nombre</th>
          <th className="w-1/4 py-2">Siglas</th>
          <th className="w-1/4 py-2">Grupo</th>
          <th className="w-1/4 py-2 hidden md:table-cell">Semestre</th>
          <th className="w-1/4 py-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {courses && courses.length === 0 ? (
          <tr>
            <td colSpan="5" className="py-2 px-4 text-center">
              {courses.length === 0 ? 'No hay cursos.' : 'Cargando cursos...'}
            </td>
          </tr>
        ) : (
        courses.map((course) => (
          <tr key={course.id}>
            <td className="py-2 pl-2">{course.name}</td>
            <td className="py-2">{course.code}</td>
            <td className="py-2">{course.group}</td>
            <td className="py-2 hidden md:table-cell">{course.level}</td>
            <td className="py-2">
              <button
                onClick={() => editCourse(course)}
                className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteCourse(course.id)}
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Delete
              </button>
            </td>
          </tr>
        )))}
      </tbody>
    </table>
  );
};

export default CourseTable;
