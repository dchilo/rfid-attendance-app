"use client";

const DateFilter = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  courses,
  setCurrentCourse,
  handleFilter
}) => {

  console.log(courses);
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleAttendanceChange = (event) => {
    setCurrentCourse(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center py-4 
      dark:bg-neutral-900">
      <h2 className="text-2xl font-bold dark:text-gray-100 mb-4">Asistencias</h2>
      <div className="flex flex-col md:flex-row items-center justify-center align-middle gap-5">
        <div className="md:mr-2">
          <label htmlFor="start-date" className="dark:text-gray-200">
            Fecha inicial:
          </label>
          <input
            type="date"
            id="start-date"
            className="px-4 py-2 dark:bg-gray-800 dark:text-gray-100 rounded-md focus:outline-none"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className=" md:ml-2">
          <label htmlFor="end-date" className="dark:text-gray-200">
            Fecha final:
          </label>
          <input
            type="date"
            id="end-date"
            className="px-4 py-2 dark:bg-gray-800 dark:text-gray-100 rounded-md focus:outline-none"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
        <div className="md:ml-2">
          <label htmlFor="attendance" className="dark:text-gray-200">
            Materia:
          </label>
          <select
            id="attendance"
            className="px-4 py-2 dark:bg-gray-800 dark:text-gray-100 rounded-md focus:outline-none"
            onChange={handleAttendanceChange}
          >
            <option>Todos los cursos</option>
            {courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        <button
          className="px-6 py-2 mt-4 md:mt-0 bg-gray-700 text-gray-100 rounded-md hover:bg-gray-600 focus:outline-none"
          onClick={handleFilter}
        >
          Mostrar
        </button>
      </div>
    </div>
  );
};

export default DateFilter;
