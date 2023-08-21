import { apiURL } from "@/app/config";

const getCoursesByUserId = async (token) => {
    console.log(token)
    
    console.log(`${apiURL}/courses`)
    return await fetch(`${apiURL}/courses`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token
        },
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

const createCourse = async (token, course) => {
    console.log(token)
    
    console.log(`${apiURL}/courses`)
    return await fetch(`${apiURL}/courses`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token
        },
        body: JSON.stringify(course)
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



export { getCoursesByUserId, createCourse }
