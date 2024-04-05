import axios from "axios";

const FIRST_API = "https://jsonplaceholder.typicode.com/users";

const firstApiAxios =axios.create({
    baseURL : FIRST_API,
})

export const 