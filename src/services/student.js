import { apiURL, esp32API } from "@/app/config";

const createStudent = async (user, student) => {
    console.log(user, student)
    return await fetch(`${apiURL}/students`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": user
        },
        body: JSON.stringify(student)
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

const getStudents = async () =>{
    return await fetch(`${apiURL}/students`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            return data
        })
        .catch((error) => {
            console.log(error)
        })
}

const updateStudentById = async (token, student, id) => {
    console.log(token, student, id)
    console.log(student)
    return await fetch(`${apiURL}/students/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
        },
        body: JSON.stringify(student)
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

const deleteStudentById = async (token, id) => {
    return await fetch(`${apiURL}/students/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token
        }
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

const addRfidCode = async (id, token) => {
    console.log(id, token)
    return await fetch(`${esp32API}/addcode?id=${id}&token=${token}`, {
        method: "POST",
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

export { createStudent, getStudents, updateStudentById, deleteStudentById, addRfidCode};