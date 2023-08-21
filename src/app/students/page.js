"use client";
import CRUDBar from "@/components/StudentCreateBar";
import Navbar from "@/components/Navbar";
import StudentsList from "@/components/StudentsTable";
import ModalForm from '@/components/ModalFormStudent'
import {useState, useEffect, useContext} from 'react'
import { UserContext } from "../context/userContext";
import { getCoursesByUserId } from "@/services/courses";

const Students = () => {

  const { user } = useContext(UserContext);

  const [student, setStudent] = useState(null);
  const [courses, setCourses] = useState([]);

  const [currentCourse, setCurrentCourse] = useState('');


  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if(user){
      fetchCourses();
    }
  },[user])


  const fetchCourses = async () => {
    const data = await getCoursesByUserId(user.token);
    console.log(data)
    setCourses(data);

    if (currentCourse === '' && data.length > 0) {
      setCurrentCourse(data[0]._id)
    }
  }

  console.log(currentCourse)

  return (
    <div className="min-h-screen
      bg-white
        dark:bg-black">
        <section>
            <Navbar />
        </section>
        <div className="container mx-auto">
          <h1 className="text-start text-3xl font-bold dark:text-gray-200 py-5">Administrar estudiantes</h1>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center py-5">
            <CRUDBar toggleModal={toggleModal} setStudent={setStudent} courses={courses} setCurrentCourse={setCurrentCourse}/>
        </div>
        <div className="container mx-auto rounded-lg">
            <StudentsList toggleModal={toggleModal} setStudent={setStudent} currentCourse={currentCourse} />
        </div>
        {console.log(courses)}
        {isOpen && <ModalForm toggleModal={toggleModal} initialState={student} courses={courses}/>}
    </div>
  );
};

export default Students;
