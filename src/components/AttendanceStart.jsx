import React, { useEffect, useState } from 'react';
import SelectOptions from './SelectOptions';
import { takeAttendance } from '@/services/attendance'

const AttendanceStart  = ({courses, isTaking, setIsTaking, courseId, setCourseId}) => {

  const handleChangeOptions = (e) => {
    setCourseId(e.target.value)
  };
  
  const handleClick = async () => {
    const newIsTaking = !isTaking;
    await takeAttendance(courseId, newIsTaking);
    setIsTaking(!isTaking)
    console.log(isTaking);
  }

  useEffect(() => {
    const handleBeforeUnload = async () => {
      console.log(isTaking)
      await takeAttendance(courseId, !isTaking);
    };

    window.addEventListener("unload", handleBeforeUnload);

    return () => {
      window.removeEventListener("unload", handleBeforeUnload);
    }
  },[courseId, isTaking])

  console.log(courses);
  return (
    <div className="flex flex-col items-center gap-5">
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded"
        onClick={() => handleClick()}
      >
        {isTaking ? 'Detener' : 'Empezar'}
      </button>
      <div>
        <SelectOptions options={courses} onChange={handleChangeOptions} />
      </div>
    </div>
  );
};

export default AttendanceStart;
