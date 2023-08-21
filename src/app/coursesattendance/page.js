'use client';
import AttendanceStudentTable from '@/components/AttendanceStudentTable';
import DateFilter from '@/components/DateFilter';
import Navbar from '@/components/Navbar';
import { getAttendaceByDateInterval } from '@/services/attendance';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import { getCoursesByUserId } from '@/services/courses';

const CourseAttendance = () => {
  const today = new Date().toISOString().substring(0, 10);
  const { user } = useContext(UserContext);
  const [attendance, setAttendance] = useState([]);
  const [courses, setCourses] = useState([]);
  const [currentCourse, setCurrentCourse] = useState();
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);

  useEffect(() => {
    if (user) {
      fetchCourses();
    }
  }, [user]);

  useEffect(() => {
    if (currentCourse && startDate && endDate) {
      fetchAttendance();
    }
  }, [currentCourse, startDate, endDate]);

  const fetchAttendance = async () => {
    const response = await getAttendaceByDateInterval(
      startDate,
      endDate,
      currentCourse
    );
    console.log(response);
    setAttendance(response);
  };

  const fetchCourses = async () => {
    const data = await getCoursesByUserId(user.token);
    setCourses(data);

    if (currentCourse === '' && data.length > 0) {
      setCurrentCourse(data[0]._id);
    }
  };

  const handleFilter = () => {
    fetchAttendance();
  };

  console.log(currentCourse);

  return (
    <div className='min-h-screen
      bg-white text-black
        dark:bg-black dark:text-gray-100'>
      <section>
        <Navbar />
      </section>
      <section className="container mx-auto mt-5 justify-center align-middle items-center">
        <div className="min-w-fit rounded-lg">
          <DateFilter
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            courses={courses}
            setCurrentCourse={setCurrentCourse}
            handleFilter={handleFilter}
          />
        </div>
        <div className="mt-5">
          <AttendanceStudentTable
            attendances={attendance}
            setAttendance={setAttendance}
          />
        </div>
      </section>
    </div>
  );
};

export default CourseAttendance;
