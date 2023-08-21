"use client";
import { UserContext } from "@/app/context/userContext";
import { createCourse } from "@/services/courses";
import { useContext, useEffect, useState } from "react";

const FormModal = ({toggleModal, initialState}) => {

  const {user} = useContext(UserContext)

  const [course, setCourse] = useState({
    name: "",
    code: "",
    group: "",
    level: "",
  });

  useEffect(() => {
    if(initialState){
      setCourse(initialState)
    } else {
      setCourse({
        name: "",
        code: "",
        group: "",
        level: "",
      })
    }
  },[initialState])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(course)

    const savedCourse = await createCourse(user.token, course);
    console.log(savedCourse)

    // Aquí puedes hacer algo con los datos del alumno, como enviarlos a una API o guardarlos en el estado de la aplicación
    
    // Limpiar el formulario
    setCourse({
        name: "",
        code: "",
        group: "",
        level: "",
    })
    // Cerrar el modal
    toggleModal();
  };

  return (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="bg-gray-700 rounded-lg p-4 mx-2 md:w-1/2 lg:w-1/3">
          <h2 className="text-white text-lg font-bold mb-4">Materia</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-white block mb-1" htmlFor="name">
                Materia:
              </label>
              <input
                className="bg-gray-600 text-white px-3 py-2 w-full rounded"
                type="text"
                id="name"
                name="name"
                value={course.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-white block mb-1" htmlFor="code">
                Siglas:
              </label>
              <input
                className="bg-gray-600 text-white px-3 py-2 w-full rounded"
                type="text"
                id="code"
                name="code"
                value={course.code}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-white block mb-1" htmlFor="group">
                Grupo:
              </label>
              <input
                className="bg-gray-600 text-white px-3 py-2 w-full rounded"
                type="text"
                id="group"
                name="group"
                value={course.group}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-white block mb-1" htmlFor="level">
                Semestre:
              </label>
              <input
                className="bg-gray-600 text-white px-3 py-2 w-full rounded"
                type="text"
                id="level"
                name="level"
                value={course.level}
                onChange={handleChange}
                required
              />
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
