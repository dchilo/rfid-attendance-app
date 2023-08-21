import { apiURL, esp32API } from "@/app/config"

const takeAttendance = async (courseId, isTaking) =>{
    console.log(isTaking, courseId)
    return await fetch(`${esp32API}/attendance?courseId=${courseId}&isTaking=${isTaking}`, {
        method: 'POST',
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            return data
        })
        .catch((error) => {
            console.log(error)
        })
}

const getAttendanceByDate = async (date, courseId) => {
    console.log(date, courseId)
    const attendances = {
        date,
        courseId
    }

    return await fetch(`${apiURL}/attendances/date/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(attendances)
    })
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            console.log(error)
        })
}

const getAttendaceByDateInterval = async (startDate, endDate, courseId) => {
    console.log(startDate, endDate, courseId)
    const attendances = {
        startDate,
        endDate,
        courseId
    }
    return await fetch(`${apiURL}/attendances/dateinterval/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(attendances)
    })
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            console.log(error)
        })
}

export { takeAttendance, getAttendanceByDate, getAttendaceByDateInterval };