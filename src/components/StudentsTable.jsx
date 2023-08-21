'use client'
import { UserContext } from '@/app/context/userContext';
import { addRfidCode, deleteStudentById, getStudents } from '@/services/student';
import React, { useContext, useEffect, useState } from 'react';

const StudentsList = ({toggleModal, setStudent, currentCourse}) => {

  const [students, setStudents] = useState([]);
  const {user} = useContext(UserContext);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetchStudents();
    }
  },[toggleModal, currentCourse]);

  const fetchStudents = async () => {
    const data = await getStudents();

    const filteredStudents = data.filter(student => {
      const studentCourses = student.courses.flat();
      return studentCourses.includes(currentCourse);
    });
    console.log(filteredStudents)
    setStudents(filteredStudents);
  };
  const handleDeleteStudent= (student) => {
    console.log(student,user)
    deleteStudentById(user.token, student._id)
  };

  const handleUpdateStudent = (student) => {
    setStudent(student)
    toggleModal();
  };

  const handleAddCode = async (student) => {
    console.log(student._id)
    const dataFetched = await addRfidCode(student._id, user.token)
    console.log(dataFetched)
  }

  console.log(students)

  return (
    <table className="container mx-auto w-full divide-ydivide-gray-300 
    dark:bg-neutral-900 dark:text-gray-100 rounded-lg table-fixed
    bg-white border-gray-200 border-2 shadow-sm">
      <thead>
        <tr className="rounder-lg ">
          <th className="py-2 px-4 ">Nombre</th>
          <th className="py-2 px-4 ">Apellido</th>
          <th className="py-2 px-4 hidden md:table-cell">Registro</th>
          <th className="py-2 px-4 ">Código</th>
          <th className="py-2 px-4 ">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {students && students.length === 0 ? (
          <tr>
            <td colSpan="5" className="py-2 px-4 text-center">
              {students.length === 0 ? 'No hay estudiantes.' : 'Cargando estudiantes...'}
            </td>
          </tr>
        ) : (
          students.map((student, index) => (
            <tr key={index}>
              <td className="py-2 px-4">{student.name}</td>
              <td className="py-2 px-4">{student.lastname}</td>
              <td className="py-2 px-4 hidden md:table-cell">
                {student.register}
              </td>
              <td className="py-2 px-4">{student.codeRfid}</td>
              <td className="py-2 px-4">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded-md mr-2"
                  onClick={() => handleUpdateStudent(student)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded-md"
                  onClick={() => handleDeleteStudent(student)}
                >
                  Eliminar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded-md"
                  onClick={() => handleAddCode(student)}
                >
                  Agregar código
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default StudentsList;
