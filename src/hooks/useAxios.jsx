import axios from "axios"
// http://localhost:5000/api/v1
// https://worktales-server.vercel.app/api/v1
const instance = axios.create({
    baseURL: "http://localhost:5000/api/v1",
   withCredentials: true,
})
const useAxios = ()=>{
    return instance
}

export default useAxios