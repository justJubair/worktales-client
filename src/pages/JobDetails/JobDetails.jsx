import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";

const JobDetails = () => {
    const {id} = useParams()
    const axios = useAxios()
    const getJob = async()=>{
        const res = await axios.get(`/jobs/${id}`)
        return res
    }
    const {data} = useQuery({
        queryKey: ["job"],
        queryFn: getJob
    })
    console.log(data)
    return(
        <div>
             <p> HELLO I Am JobDetails </p>
        </div>
    )}
export default JobDetails;