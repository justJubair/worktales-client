import { useQuery } from "@tanstack/react-query";
import GeneralNav from "../../components/Navbar/GeneralNav";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import PostedJobCard from "./PostedJobCard";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const getEmployerJobs = async () => {
    const res = await axios.get(`/jobs?employer_email=${user?.email}`);
    return res;
  };
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["employerJob"],
    queryFn: getEmployerJobs,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <GeneralNav />
      <div className="max-w-screen-xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 px-2 lg:px-0">
        {data.data?.map((job) => (
          <PostedJobCard key={job._id} refetch={refetch} job={job} />
        ))}
      </div>
    </>
  );
};
export default MyPostedJobs;
