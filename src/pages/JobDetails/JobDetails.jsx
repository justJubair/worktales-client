import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";

const JobDetails = () => {
    const {id} = useParams()
    const axios = useAxios()
    const getJob = async()=>{
        const res = await axios.get(`/jobs/${id}`)
        return res.data
    }
    const {data:job, isLoading} = useQuery({
        queryKey: ["job"],
        queryFn: getJob
    })
    if(isLoading){
        return <div><p>loading...</p></div>
    }
    console.log(job)
    return(
        <div>
            <div className="w-full h-96">
            <img className="h-full w-full object-cover"  src="https://i.ibb.co/bsqNKyj/pexels-vlada-karpovich-4050320.jpg" alt="laptop" />
            <div className="absolute top-0 w-full h-96 bg-[#1c0606]/90"></div>
            <div className="absolute w-1/2 top-24 left-80">
                <h2 className="text-center mb-4 text-2xl font-medium">{job.job_title}</h2>
                <p className="mb-4">{job.long_description}</p>
                <div className="flex items-center justify-center gap-4">
                    <p className="font-medium px-4 py-2 rounded-md bg-[#280808]">Deadline: {job.deadline}</p>
                    <p className="font-medium px-4 py-2 rounded-md bg-[#280808]">Price: {job.price_range}</p>
                </div>
            </div>
            </div>
        </div>
    )}
export default JobDetails;