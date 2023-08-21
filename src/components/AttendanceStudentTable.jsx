"use client";

const AttendanceStudentTable = ({ attendances }) => {
  const opcionesFormato = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Santiago'
  };
  
  const formatoFechaHora = new Intl.DateTimeFormat('es-ES', opcionesFormato);
  
  const renderAttendances = attendances.map(item => {
    const fechaFormateada = formatoFechaHora.format(new Date(item.createdAt));
    return { ...item, createdAt: fechaFormateada };
  });

  return (
    <table className="container mx-auto w-full divide-y divide-gray-300 
    dark:bg-neutral-900 rounded-lg table-fixed
      border-gray-200 shadow-sm border-2">
      <thead>
        <tr className="rounder-lg ">
          <th className="py-2 px-4 ">Nombre</th>
          <th className="py-2 px-4 ">Apellido</th>
          <th className="py-2 px-4 hidden md:table-cell">Registro</th>
          <th className="py-2 px-4 ">Fecha</th>
        </tr>
      </thead>
      <tbody>
        {attendances && attendances.length === 0 ? (
          <tr>
            <td colSpan="5" className="py-2 px-4 text-center">
              {attendances.length === 0 ? 'No hay estudiantes.' : 'Cargando estudiantes...'}
            </td>
          </tr>
        ) : (
          renderAttendances.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4">{item.student.name}</td>
              <td className="py-2 px-4">{item.student.lastname}</td>
              <td className="py-2 px-4 hidden md:table-cell">
                {item.student.register}
              </td>
              <td className="py-2 px-4">{item.createdAt}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default AttendanceStudentTable;
