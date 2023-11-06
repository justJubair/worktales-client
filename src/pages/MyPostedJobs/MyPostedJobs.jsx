import { useQuery } from "@tanstack/react-query";
import GeneralNav from "../../components/Navbar/GeneralNav";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import PostedJobCard from "./PostedJobCard";


const MyPostedJobs = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const getJobs = async () => {
    const res = await axios.get(`/jobs?employer_email=${user?.email}`);
    return res;
  };
  const { data: jobs } = useQuery({
    queryKey: ["userBasedJob"],
    queryFn: getJobs,
  });

  return (
    <>
      <GeneralNav />
      <div>
        {
            jobs?.data.map(job=> <PostedJobCard key={job._id} job={job}/>)
        }
      </div>
    </>
  );
};
export default MyPostedJobs;
