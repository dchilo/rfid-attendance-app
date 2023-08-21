'use client';
import CourseCreateBar from '@/components/CourseCreateBar';
import CourseTable from '@/components/CoursesTable';
import FormModal from '@/components/ModalFormCourse';
import Navbar from '@/components/Navbar';
import { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';

const MyCourses = () => {
  const { user } = useContext(UserContext);
  const [course, setCourse] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='min-h-screen
    dark:bg-black dark:text-gray-100'>
      <section>
        <Navbar />
      </section>
      {user ? (
        <section className="container mx-auto">
          <div className="">
            <h1
              className="text-start text-3xl font-bold py-5
              text-black
                dark:text-gray-100"
            >
              Administrar mis cursos
            </h1>
          </div>
          <div className=" flex justify-center py-5">
            <CourseCreateBar toggleModal={toggleModal} setCourse={setCourse} />
          </div>
          <div>
            <CourseTable toggleModal={toggleModal} setCourse={setCourse} />
          </div>
        </section>
      ) : (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mx-auto my-5 w-3/4"
          role="alert"
        >
          <strong className="font-bold">¡Atención!</strong>
          <span className="block sm:inline">
            {' '}
            Debes iniciar sesión para acceder a esta página.
          </span>
        </div>
      )}
      {isOpen && <FormModal toggleModal={toggleModal} isOpen={isOpen} />}
    </div>
  );
};

export default MyCourses;
