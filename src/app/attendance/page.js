'use client';
import AttendanceStart from '@/components/AttendanceStart';
import Navbar from '@/components/Navbar';
import { getCoursesByUserId } from '@/services/courses';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import { getAttendanceByDate } from '@/services/attendance';
import AttendanceStudentTable from '@/components/AttendanceStudentTable';
import Footer from '@/components/Footer';

const MyCourses = () => {
  const { user } = useContext(UserContext);
  const [courses, setCourses] = useState([]);
  const [isTaking, setIsTaking] = useState(false);
  const [courseId, setCourseId] = useState('');
  const [attendance, setAttendance] = useState([]);

  const date = new Date();
  console.log(date);

  useEffect(() => {
    if (user) fetchCourses(user.token);

    if (isTaking) {
      fetchCurrentAttendance();

      const interval = setInterval(fetchCurrentAttendance, 5000);
      console.log(interval);
      return () => clearInterval(interval);
    }
  }, [user, courseId, isTaking]);

  const fetchCourses = async () => {
    const data = await getCoursesByUserId(user.token);
    console.log(data);
    setCourses(data);

    if (courseId === '' && data.length > 0) {
      setCourseId(data[0]._id);
    }
  };

  console.log(courseId);
  const fetchCurrentAttendance = async () => {
    console.log(date, courseId);
    const currentAttendance = await getAttendanceByDate(date, courseId);
    setAttendance(currentAttendance);
  };
  console.log(attendance);

  return (
    <div className="min-h-screen flex flex-col
    bg-white 
      dark:bg-black">
      <Navbar />
      <div className="container mx-auto py-10">
        <AttendanceStart
          courses={courses}
          courseId={courseId}
          setCourseId={setCourseId}
          isTaking={isTaking}
          setIsTaking={setIsTaking}
        />
      </div>
      <div className="container mx-auto py-10">
        {attendance && attendance.length > 0 ? (
          <AttendanceStudentTable attendances={attendance} />
        ) : (
          <div className="flex items-center justify-center">
            <div className="bg-gray-200 p-5 rounded-md shadow-md">
              <p className="text-xl font-semibold text-center">
                Esperando asistencias ...
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default MyCourses;
