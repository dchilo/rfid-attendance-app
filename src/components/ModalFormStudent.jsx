"use client";
import { UserContext } from "@/app/context/userContext";
import { createStudent, updateStudentById } from "@/services/student";
import { useContext, useEffect, useState } from "react";

const FormModal = ({ toggleModal, initialState, courses }) => {

  const {user} = useContext(UserContext)
  console.log(courses)

  const [student, setStudent] = useState({
    name: "",
    lastname: "",
    register: "",
    email: "",
    code: "",
    courses: [],
  });

  useEffect(() => {
    if(initialState){
      setStudent(initialState)
    } else {
      setStudent({
        name: "",
        lastname: "",
        register: "",
        email: "",
        codeRfid: "",
        courses: [],
      })
    }
  },[initialState])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleCourseChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setStudent((prevStudent) => ({ ...prevStudent, courses: selectedOptions }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user)
    if (!initialState){
      console.log(student)
      const newstudent = await createStudent(user.token, student)
      console.log(newstudent)
    } else {
      const edittedeStudent = await updateStudentById(user.token, student, student._id)
      console.log(edittedeStudent)
    }

    // Aquí puedes hacer algo con los datos del alumno, como enviarlos a una API o guardarlos en el estado de la aplicación
    
    // Limpiar el formulario
    setStudent({
      name: "",
      lastname: "",
      register: "",
      email: "",
      code: "",
      courses: [],
    });
    // Cerrar el modal
    toggleModal();
  };

  return (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="bg-gray-700 rounded-lg p-4 mx-2 md:w-1/2 lg:w-1/3">
          <h2 className="text-white text-lg font-bold mb-4">Estudiante</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-white block mb-1" htmlFor="name">
                Nombre:
              </label>
              <input
                className="bg-gray-600 text-white px-3 py-2 w-full rounded"
                type="text"
                id="name"
                name="name"
                value={student.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-white block mb-1" htmlFor="lastname">
                Apellido:
              </label>
              <input
                className="bg-gray-600 text-white px-3 py-2 w-full rounded"
                type="text"
                id="lastname"
                name="lastname"
                value={student.lastname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-white block mb-1" htmlFor="register">
                Registro:
              </label>
              <input
                className="bg-gray-600 text-white px-3 py-2 w-full rounded"
                type="text"
                id="register"
                name="register"
                value={student.register}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-white block mb-1" htmlFor="email">
                Email:
              </label>
              <input
                className="bg-gray-600 text-white px-3 py-2 w-full rounded"
                type="email"
                id="email"
                name="email"
                value={student.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-white block mb-1" htmlFor="code">
                Código:
              </label>
              <input
                className="bg-gray-600 text-white px-3 py-2 w-full rounded"
                type="text"
                id="codeRfid"
                name="codeRfid"
                value={student.codeRfid}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="text-white block mb-1" htmlFor="courses">
                Cursos:
              </label>
              <select
                className="bg-gray-600 text-white px-3 py-2 w-full rounded"
                id="courses"
                name="courses"
                multiple
                value={student.courses}
                onChange={handleCourseChange}
              >
                {courses.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.name}
                  </option>))}
              </select>
            </div>

            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-800 text-white px-4 py-2 rounded"
                onClick={toggleModal}
              >
                Cancelar
              </button>
              <button
                className="bg-gray-800 text-white px-4 py-2 rounded"
                type="submit"
              >
                Aceptar
              </button>
            </div>
          </form>
        </div>
      </div>
  )
};
export default FormModal;
